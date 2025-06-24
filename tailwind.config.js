module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#16232B',
                secondary: '#6A6C6B',
            },
            backgroundImage: {
                'diagonal-gradient': 'linear-gradient(to top right, #16232B, #6A6C6B)',
            },
        },
    },
    plugins: [],
}