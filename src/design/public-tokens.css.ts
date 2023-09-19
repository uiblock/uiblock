import { createGlobalTheme } from '@vanilla-extract/css'

const darkTheme = createGlobalTheme(':root', {
  color: {
    gray: {
      base: '#000000',
      100: '#191919',
      200: '#333333',
      300: '#4d4d4d',
      400: '#666666',
      600: '#999999',
      700: '#b3b3b3',
      800: '#cccccc',
      900: '#e6e6e6',
      1000: '#ffffff',
    },
    red: {
      500: '#802519',
      620: '#9e2e20',
      730: '#ba3727',
      820: '#d1402f',
      880: '#e1574a',
      910: '#e75f54',
      930: '#ed6962',
      950: '#f38986',
      980: '#f9baba',
      1000: '#ffe6e6',
    },
    blue: {
      400: '#003366',
      550: '#00468b',
      680: '#0258ac',
      870: '#0669c7',
      860: '#2585db',
      890: '#2f90e2',
      920: '#409ee9',
      940: '#6db9f1',
      970: '#aedaf8',
      1000: '#e6f5ff',
    },
    green: {
      200: '#0a3329',
      280: '#0f4739',
      360: '#155c4a',
      440: '#1d705b',
      520: '#28856d',
      680: '#4aad94',
      760: '#69c2aa',
      840: '#92d6c4',
      920: '#bbebdd',
      1000: '#e6fff8',
    },
    yellow: {
      280: '#473d07',
      370: '#5e5009',
      460: '#75630a',
      550: '#8c770d',
      780: '#c8ae45',
      860: '#dac36d',
      900: '#e6c940',
      990: '#fde166', // true nice yellow color in dark mode
      1001_1: '#fff1c3', // from light mode colum in color box
      1000: '#fff9e6', // it looks more like white or light gray
    },
    orange: {
      470: '#774710',
      570: '#92540d',
      680: '#ad5f08',
      1001_1: '#ff8000', // true orange color in dark mode
      1002_2: '#ff9224',
      1004: '#ffaa54',
      1003: '#ffba78',
      1002: '#ffca9a',
      1001: '#ffddc0',
      1000: '#fff1e6',
    },
    magenta: {
      420: '#6c2668',
      490: '#7c2d78',
      550: '#8d3788',
      620: '#9d4299',
      680: '#ad51aa',
      740: '#be63bb',
      810: '#ce7ecd',
      870: '#dea2de',
      940: '#edc3ef',
      1000: '#fee6ff',
    },
    purple: {
      300: '#26234d',
      470: '#3b3878',
      620: '#504c9e',
      750: '#625fbe',
      760: '#6865c1',
      870: '#8786dd',
      900: '#9c9be6',
      930: '#b6b6ee',
      970: '#cecef7',
      1000: '#e6e6ff',
    },
    pink: {
      290: '#4a0f2f',
      460: '#76194e',
      620: '#9d246c',
      740: '#bd3187',
      750: '#c03a8c',
      870: '#dd5fb1',
      900: '#e57cc2',
      930: '#eea3d5',
      970: '#f6c5e6',
      1000: '#ffe6f7',
    },
  },
  font: {
    family: {
      system:
        'system-ui, -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      mono: 'ui-monospace SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    },
    size: {
      75: '0.75rem', // 12px
      87: '0.875rem', // 14px
      100: '1rem', // 16px
      125: '1.25rem', // 20px
      150: '1.5rem', // 24px
      175: '1.75rem', // 28px
      200: '2rem', // 32px
      250: '2.5rem', // 40px
    },
    weight: {
      thin: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      100: '1rem',
      125: '1.25rem',
      150: '1.5rem',
      175: '1.75rem',
      200: '2rem',
      250: '2.5rem',
      300: '3rem',
    },
    align: {
      start: 'start',
      center: 'center',
      end: 'end',
    },
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
  },
  size: {
    0: '0',
    2: '0.5rem',
    11: '2.75rem',
    15: '3.75rem',
  },
})

export default darkTheme
