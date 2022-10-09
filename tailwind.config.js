/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './app/helpers/**/*.rb',
        './app/assets/stylesheets/**/*.css',
        './app/views/**/*.{html,html.erb,erb}',
        './app/views/devise/**/*.{html,html.erb,erb}',
        './app/frontend/components/**/*.{vue,js,ts,jsx,tsx}',
        './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
        './app/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'sans': ["BlinkMacSystemFont", "Avenir Next", "Avenir",
                "Nimbus Sans L", "Roboto", "Noto Sans", "Segoe UI", "Arial", "Helvetica",
                "Helvetica Neue", "sans-serif"],
            'mono': ["Consolas", "Menlo", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"]
        },
        extend: {
            colors: {
                theme: {
                    bg: 'var(--bg)',
                    'accent-bg': 'var(--accent-bg)',
                    text: 'var(--text)',
                    'text-light': 'var(--text-light)',
                    border: 'var(--border)',
                    accent: 'var(--accent)',
                    code: 'var(--code)',
                    preformatted: 'var(--pre)',
                    disabled: 'var(--disabled)',
                }
            }
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
