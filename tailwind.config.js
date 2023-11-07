import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    ringOffsetColor: {
      black: '#000000',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: colors.neutral,
      red: colors.red,
      yellow: {
        50: '#fff9e6',
        100: '#fff1c3', // from light mode colum in color box
        200: '#fde166', // true nice yellow color in dark mode
        300: '#e6c940',
        400: '#dac36d',
        500: '#c8ae45',
        600: '#8c770d',
        700: '#75630a',
        800: '#5e5009',
        900: '#473d07',
      },
      green: {
        50: '#e6fff8',
        100: '#bbebdd',
        200: '#92d6c4',
        300: '#69c2aa',
        400: '#2EB893',
        500: '#4aad94',
        600: '#28856d',
        700: '#1d705b',
        800: '#155c4a',
        900: '#0f4739',
        950: '#0a3329',
      },
      blue: {
        50: '#e6f5ff',
        100: '#c5e8fe',
        200: '#add9f7',
        300: '#6cb7ee',
        400: '#3f9ce6',
        500: '#2e8ddd',
        600: '#0e75d5',
        700: '#0664be',
        800: '#02519e',
        900: '#003c78',
        950: '#00264d',
      },
      indigo: colors.indigo,
      lime: colors.lime,
    },
    fontWeight: {
      thin: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      l1: [
        '2.5rem', // 40px
        {
          lineHeight: '3rem', // 48px
          fontWeight: '700',
        },
      ],
      l2: [
        '2rem', // 32px
        {
          lineHeight: '2.5rem', // 40
          fontWeight: '600',
        },
      ],
      l3: [
        '1.75rem', // 28px
        {
          lineHeight: '2rem', // 32px
          fontWeight: '600',
        },
      ],
      l4: [
        '1.5rem', // 24px
        {
          lineHeight: '1.75rem', // 28px
          fontWeight: '600',
        },
      ],
      l5: [
        '1.25rem', // 20px
        {
          lineHeight: '1.5rem', // 24px
          fontWeight: '600',
        },
      ],
      l6: [
        '1rem', // 16px
        {
          lineHeight: '1.5rem', // 24px
          fontWeight: '600',
        },
      ],
      md: [
        '1rem', //16px
        { lineHeight: '1.25rem' },
      ],
      sm: [
        '0.875rem', // 14px
        { lineHeight: '1.25rem' },
      ],
      xs: [
        '0.75rem', // 12px
        { lineHeight: '1rem' },
      ],
    },
    fontFamily: {
      system:
        'system-ui, -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      mono: 'ui-monospace SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    },
    minHeight: {
      44: '2.75rem',
      60: '3.75rem',
    },
    minWidth: {
      44: '2.75rem',
      60: '3.75rem',
    },
  },
  plugins: [],
}
