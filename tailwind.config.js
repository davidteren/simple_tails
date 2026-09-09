/** @type {import('tailwindcss').Config} */
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
    safelist: [
        'font-extralight',
        'font-extrabold',
        'text-red-500',
        'text-pink-600',
        'text-orange-600',
        'text-sm',
        'text-3xl',
    ],
    theme: {
        fontFamily: {
            sans: [
                "ui-sans-serif",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
            ],
            serif: [
                "Iowan Old Style",
                "Palatino Linotype",
                "Palatino",
                "Charter",
                "Georgia",
                "serif",
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Consolas",
                "monospace",
            ],
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
                    'accent-text': 'var(--accent-text)',
                    code: 'var(--code)',
                    preformatted: 'var(--preformatted)',
                    disabled: 'var(--disabled)',
                    focus: 'var(--focus)',
                    danger: 'var(--danger)',
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
