'use client'
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
        default:
            return state;
    }
};

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "SET_PRODUCTS", payload: data });
            })
            .catch((err) => console.log(err));

    }, []);
        console.log(state.products);
    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
