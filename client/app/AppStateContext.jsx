'use client'
import axios from "axios";
import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
    products: [],
    cart: [],
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
        default:
            return state;
    }
};

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios("https://fakestoreapi.com/products")
            .then((res) => {
                dispatch({ type: "SET_PRODUCTS", payload: res.data });
            })
            .catch((err) => console.log(err));

    }, []);
    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
