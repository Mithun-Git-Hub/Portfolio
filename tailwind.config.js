module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3748", // gray-700
        secondary: "#4A5568", // gray-600
        accent: "#3182CE", // blue-600
        background: "#FFFFFF", // white
        surface: "#F7FAFC", // gray-50
        'text-primary': "#1A202C", // gray-900
        'text-secondary': "#718096", // gray-500
        success: "#38A169", // green-500
        warning: "#D69E2E", // yellow-500
        error: "#E53E3E", // red-500
        border: "#E2E8F0", // gray-200
        
        // Extended gray palette for consistency
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'xs': '4px',
        'sm-custom': '8px',
        'md-custom': '12px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(45, 55, 72, 0.25)',
        'elevation-2': '0 2px 4px rgba(45, 55, 72, 0.25)',
        'elevation-3': '0 4px 8px rgba(45, 55, 72, 0.25)',
        'elevation-4': '0 8px 16px rgba(45, 55, 72, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 300ms ease-out',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '-200% 0',
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
        'balanced': 'ease-in-out',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}