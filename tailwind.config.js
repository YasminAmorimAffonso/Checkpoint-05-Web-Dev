
/** @type {import('tailwindcss').Config} */

export default {


    content: [

        "./index.html",

        "./src/**/*.{js,ts,jsx,tsx}",

    ],

    theme: {

        extend: {

            fontFamily: {

                voga: ["voga", "sans-serif"],

                inter: ["inter", "sans-serif"],

                poppins: ["poppins", "sans-serif"],

            }

        },

    },

    plugins: [],


}