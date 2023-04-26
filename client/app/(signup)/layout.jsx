import "../globals.css";


const layout = ({ children }) => {
    return (
        <body className="bg-image">
            {children}
        </body>
    );
};

export default layout;
