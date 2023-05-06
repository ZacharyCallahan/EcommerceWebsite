"use client";
import axios from "axios";
import React, { createContext, useReducer, useEffect, useState } from "react";

const initialState = {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product.id !== action.payload
                ),
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_TO_CART":
            const exist = state.cart.find(
                (product) => product.id === action.payload.product.id
            );
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload.product.id
                            ? { ...exist, quantity: exist.quantity + 1 }
                            : product
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        { ...action.payload.product, quantity: 1 },
                    ],
                };
            }
        case "REMOVE_FROM_CART":
            const productExist = state.cart.find(
                (product) => product.id === action.payload.product.id
            );
            if (productExist.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(
                        (product) => product.id !== action.payload.product.id
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload.product.id
                            ? {
                                ...productExist,
                                quantity: productExist.quantity - 1,
                            }
                            : product
                    ),
                };
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios("http://localhost:8000/api/clothing")
            .then((res) => {
                dispatch({ type: "SET_PRODUCTS", payload: res.data });
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
