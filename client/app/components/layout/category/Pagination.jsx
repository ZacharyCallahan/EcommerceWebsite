import { useState, useEffect, useRef } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const isMounted = useRef(false);
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    };

    useEffect(() => {
        if (isMounted.current) {
            const productsPage = document.getElementById("products-page");
            if (productsPage) {
                productsPage.scrollIntoView({ behavior: "smooth" });
            }
            console.log("currentPage: ", currentPage);
        } else {
            isMounted.current = true;
        }
    }, [currentPage]);

    return (
        <nav className="flex justify-between items-center">
            <button
                className={`${
                    currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : " bg-groovy-red text-white  hover:bg-groovy-red-dark"
                } p-2 rounded-r shadow-md font-bold w-fit text-center`}
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}>
                Previous
            </button>
            <p className="text-lg font-bold">
                Page {currentPage} of {totalPages}
            </p>
            <button
                className={`${
                    currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : " bg-groovy-red text-white  hover:bg-groovy-red-dark"
                } p-2 rounded-l shadow-md font-bold w-fit text-center`}
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}>
                Next
            </button>
        </nav>
    );
};

export default Pagination;
