"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Rubik } from "next/font/google";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../globals.css";

const rubik = Rubik({ subsets: ["cyrillic"] });

const theme = createTheme({});

export default function RootLayout({ children }) {
    return (
        <div className={`${rubik.className}`}>
            <ThemeProvider theme={theme}>
                    <NavBar />
                    {children}
                    <Footer />
            </ThemeProvider>
        </div>
    );
}
