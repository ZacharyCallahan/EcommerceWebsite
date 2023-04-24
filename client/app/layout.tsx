"use client"
import { Rubik } from "next/font/google";
import NavBar from "./components/layout/NavBar";
import "./globals.css";
import Footer from "./components/layout/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core";

const rubik = Rubik({ subsets: ["cyrillic"] });


const theme = createTheme({});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body className={`${rubik.className}`}>
                <ThemeProvider theme={theme}>
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
