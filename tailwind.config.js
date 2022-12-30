/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    "0%": { opacity: '0' },
                    "100%": { opacity: '1' }
                },
            },
        },
        fontFamily: {
            dance: ["Dancing Script", "cursive"],
            lobs: ["Lobster Two", "cursive"],
            merienda: ["Merienda", "cursive"],
            pacifico: ["Pacifico", "cursive"],
            playfair: ["Playfair Display", "serif"],
            zendots: ["Zen Dots", "cursive"],
        },
    },
    plugins: [],
};
