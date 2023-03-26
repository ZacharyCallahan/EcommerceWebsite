/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/templates/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "groovy-yellow": "#F8F933",
                "groovy-blue": "#00D4E0",
                "groovy-purple": "#BA61FA",
                "groovy-orange": "#F89C5E",
                "groovy-red": "#D0515C",
                "groovy-green": "#28F780",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
