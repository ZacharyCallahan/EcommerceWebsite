import Link from "next/link";
import "./globals.css"


const notfound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5 text-gray-100">
            <h1 className="text-9xl font-bold text-groovy-red">404</h1>
            <h2 className="text-4xl font-bold text-groovy-red">
                Sorry, the page you are looking for cannot be found or is under
                construction.
            </h2>

            <Link
                href={"/"}
                className="p-4 bg-groovy-red rounded-md shadow-md text-white font-bold text-xl">
                Go back home
            </Link>
        </div>
    );
};

export default notfound;
