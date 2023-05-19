import Link from "next/link";
import "./globals.css";
import Button from "./components/ui/Button";

const notfound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-gray-100">
            <div className="w-1/2 text-center space-y-5">
                <h1 className="text-9xl font-bold text-groovy-red">404</h1>
                <h2 className="text-4xl font-bold text-groovy-red">
                    Sorry, the page you are looking for cannot be found or is
                    under construction.
                </h2>
            </div>
        </div>
    );
};

export default notfound;
