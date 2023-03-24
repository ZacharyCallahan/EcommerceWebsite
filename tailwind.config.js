/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/templates/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "groovy-yellow": "#F8F933",
                "groovy-blue": "#49FBF9",
                "groovy-purple": "#BA61FA",
                "groovy-orange": "#F89C5E",
                "groovy-red": "#D0515C",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
    ],
};
