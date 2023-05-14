"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Rubik } from "next/font/google";
import { Suspense } from "react";
import { AppStateProvider } from "../AppStateContext";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../globals.css";

const rubik = Rubik({ subsets: ["cyrillic"] });

const theme = createTheme({});

export default function RootLayout({ children }) {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>Groovy Gear</title>
            </head>
            <body className={`${rubik.className}`}>
                <ThemeProvider theme={theme}>
                    <AppStateProvider>
                        <NavBar />
                        {children}
                        <Footer />
                    </AppStateProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
