import { AppStateProvider } from "./AppStateContext";

const layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>Groovy Gear</title>
            </head>
            <body>
                <AppStateProvider>{children}</AppStateProvider>
            </body>
        </html>
    );
};

export default layout;
