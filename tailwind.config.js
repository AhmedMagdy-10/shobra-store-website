export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: '#2B50D2',
                second: '#ffffff',
            },
            fontFamily: {
                arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
            },
        },
    },
    plugins: [],
}