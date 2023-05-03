'use client'
import axios from "axios";
import React, { createContext, useReducer, useEffect, useState } from "react";

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
    const [loading, setLoading] = useState(false);

    { useEffect(() => {
        axios("http://localhost:8000/api/clothing")
            .then((res) => {
                dispatch({ type: "SET_PRODUCTS", payload: res.data });
                setLoading(false);
            })
            .catch((err) => console.log(err));

    }, []); }
    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {loading ? <h1>Loading...</h1> : children }
        </AppStateContext.Provider>
    );
};
