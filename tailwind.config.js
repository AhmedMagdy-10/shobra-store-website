export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "2rem",
                xl: "4rem",
            },
        },
        extend: {
            colors: {
                main: '#007bff',    // Primary blue
                second: '#ffffff',  // Secondary white
            },
            screens: {
                'xs': '420px',
                // keep default sm/md/lg/xl/2xl
            },
        },
    },
    plugins: [],
};