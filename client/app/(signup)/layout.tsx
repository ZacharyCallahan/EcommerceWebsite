import "../globals.css";

interface layoutProps {
    children?: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
    return (
        <body className="bg-image">
            {children}
        </body>
    );
};

export default layout;
