"use client";
import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

const cartFromLocalStorage =
    typeof window !== "undefined" && localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

const initialState = {
    products: [],
    cart: cartFromLocalStorage,
    user: null,
};

const reducer = (state, action) => {
    console.log("reducer ran");

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
            const { product, size, quantity } = action.payload;

            // Find the index of the existing item in the cart with the same product ID and size
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === product.id && item.size === size
            );

            // If the existing item is found
            if (existingItemIndex !== -1) {
                // Create a new object with updated quantity
                const updatedItem = {
                    ...state.cart[existingItemIndex],
                    // If quantity is provided, parse it to an integer and add to existing quantity, otherwise add 1
                    quantity:
                        parseInt(state.cart[existingItemIndex].quantity) +
                        (parseInt(quantity) || 1),
                };

                // Create a new cart array with the updated item
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = updatedItem;

                // Return updated state with the new cart array
                return { ...state, cart: updatedCart };
            } else {
                // If the existing item is not found, create a new item object
                const newItem = {
                    ...product,
                    size,
                    quantity: parseInt(quantity) || 1,
                };
                // Return updated state with the new cart array containing the new item
                return { ...state, cart: [...state.cart, newItem] };
            }

        case "REMOVE_FROM_CART":
            const existingItem = state.cart.find(
                (item) => item.id === action.payload
            );

            if (existingItem.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(
                        (item) => item.id !== action.payload
                    ),
                };
            } else {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1,
                };

                const updatedCart = [...state.cart];
                const existingItemIndex = state.cart.findIndex(
                    (item) => item.id === action.payload
                );
                updatedCart[existingItemIndex] = updatedItem;

                return { ...state, cart: updatedCart };
            }

        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            };

        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };

        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log("login check");

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/users/loggedin`, {
                withCredentials: true,
            })
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res.data });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: "LOGOUT" });
            });
    }, []);

    useEffect(() => {
        console.log("runing set products");
        axios(`${process.env.NEXT_PUBLIC_API_URL}/clothing`)
            .then((res) => {
                dispatch({ type: "SET_PRODUCTS", payload: res.data });
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        console.log("running cart");
    }, [state.cart]);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
