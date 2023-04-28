const FilterItem = ({children, className}) => {
    return (
        <div
            className={`bg-gray-100 p-5 rounded-md shadow-md gap-5 h-fit ${className}`}>
            {children}
        </div>
    );
}

export default FilterItem