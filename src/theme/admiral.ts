import {
  borderColor,
  brandOne,
  brandOneFont,
  brandThree,
  brandThreeFont,
  brandTwo,
  brandTwoFont,
  ourBlack,
  darkBrand,
} from './colors';

const buttonHeight = 40;

export const admiralTheme = {
  breakpoints: ['480px', '736px', '980px', '1280px', '1690px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    // Brand Colors
    brandOne,
    brandOneFont,
    brandTwo,
    brandTwoFont,
    brandThree,
    brandThreeFont,
    darkBrand,

    // Theme specific
    primary: brandOne[0],
    primaryFont: brandOneFont,
    secondary: brandTwo[0],

    borderColor: borderColor,
    ourBlack,

    grey: borderColor,
    greyFont: '#75797b',

    // Pagination
    paginationBg: 'transparent',
    paginationActiveBg: 'transparent',
    paginationHover: 'transparent',
    paginationFont: brandOne[0],

    // Search
    searchResultsBorder: borderColor,
    searchResultsBg: 'white',

    // Status
    success: '#5db296',
    successFont: '#fff',
    error: '#f14668',
    errorFont: '#fff',

    inputFont: '#ddd',
    inputDisabledBG: '#f6f6f7',

    orderPanel: 'transparent',
  },
  fonts: {
    body: 'Montreal',
    heading: 'Montreal',
  },
  lineHeights: {
    standard: 1.6,
  },
  borders: {
    standard: `2px solid ${borderColor}`,
    pagination: 'none',
    // pagination: `2px solid ${borderColor}`,
    paginationActive: `2px solid ${borderColor}`,
    paginationHover: `2px solid ${borderColor}`,
  },
  radii: {
    default: 4,
    button: 2,
  },
  forms: {
    label: {
      fontWeight: 'bold',
      mb: 3,
    },
    input: {
      borderWidth: 2,
      borderRadius: '2px',
      background: 'white',
      color: 'brandOne.0',
      borderColor: 'borderColor',
      px: 3,
      fontSize: 1,
      height: 48,
      ':focus': {
        outline: 'none',
        outlineColor: 'transparent',
        borderColor: 'brandOne.0',
      },
    },
    search: {
      borderWidth: 2,
      borderColor: 'borderColor',
      background: 'white',
      color: 'brandOne.0',
      fontSize: 14,
      ':focus': {
        outlineColor: 'brandOne.0',
      },
    },
    select: {
      borderColor: 'borderColor',
      borderWidth: 2,
      p: 2,
      height: 40,
      borderRadius: 'button',
      fontSize: 1,
      '&:disabled': {
        borderColor: 'inputDisabledBG',
        background: 'inputDisabledBG',
        color: 'inputFont',
      },
      ':focus': {
        outlineColor: 'brandOne.0',
      },
    },
    qtyInput: {
      color: 'brandTwo.0',
      fontWeight: 'bold',
      border: 'standard',
      borderRadius: 'button',
    },
    textarea: {
      border: 'standard',
      borderRadius: 0,
      fontSize: 1,
      fontWeight: 400,
    },
  },
  text: {
    heading: {
      textTransform: 'uppercase',
    },
    login: {
      color: ['white', 'white', 'white', 'brandOne.0'],
    },
    breadcrumb: {
      fontSize: 1,
      display: 'inline-block',
      color: 'brandOne.0',
      a: {
        ':hover': {
          textDecoration: 'underline',
        },
      },
    },
    tabText: {
      fontSize: [1, 3],
      textTransform: 'uppercase',
      pt: [0, 1],
      pb: [0, 2],
      cursor: 'pointer',
      '&.active': {
        borderBottom: 'standard',
      },
    },
  },
  buttons: {
    loading: {
      background: 'transparent',
    },
    primary: {
      color: 'brandOneFont',
      height: buttonHeight,
      backgroundColor: 'brandOne.0',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: 'button',
      transition: '0.2s all',
      ':hover': {
        backgroundColor: 'brandOne.1',
      },
      ':disabled': {
        backgroundColor: 'transparent',
        color: 'greyFont',
        cursor: 'not-allowed',
      },
    },
    cta: {
      backgroundColor: '#fff',
      color: '#2C6E42',
      fontWeight: 600,
      borderRadius: 0,
      cursor: 'pointer',
      alginItems: 'center',
      px: 4,
      display: 'inline-flex',
    },
    secondary: {
      color: 'brandOne.0',
      height: buttonHeight,
      backgroundColor: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'brandOne.0',
      cursor: 'pointer',
      borderRadius: 'button',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      transition: '0.2s all',
      ':hover': {
        backgroundColor: 'grey',
      },
    },
    clear: {
      color: 'brandOne.0',
      background: 'white',
      cursor: 'pointer',
      transition: '0.2s all',
      borderRadius: 2,
      border: '1px solid #979797',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
    addToCart: {
      borderRadius: '2px',
      height: buttonHeight,
      cursor: 'pointer',
      transition: '0.2s all',
      fontWeight: 'bold',
      fontSize: '14px',
      px: 3,
    },
    qty: {
      color: 'brandOne.0',
      background: 'transparent',
      cursor: 'pointer',
      transition: '0.2s all',
      borderRadius: 'button',
      ':hover': {
        backgroundColor: 'grey',
      },
    },
    wishlist: {
      color: 'brandTwo.0',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: '0.2s all',
      p: 2,
      ':hover': {
        color: 'brandOne.0',
      },
    },
    textButton: {
      color: 'brandOne.0',
      p: 0,
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: '0.2s all',
      borderRadius: 'button',
      ':hover': {
        color: 'brandTwo.1',
      },
    },
  },
  cart: {
    gridTemplateColumns: [
      '90px auto',
      null,
      '120px minmax(150px, 1fr) repeat(3, minmax(100px, 190px)) 50px',
    ],
  },
  variants: {
    smallWidth: {
      width: 600,
    },
    largeContainer: {
      maxWidth: 1600,
      mx: 'auto',
      px: [2, 2, 4],
    },
    container: {
      maxWidth: 1440,
      px: [3, 3, '74px'],
      mx: 'auto',
    },
    smallContainer: {
      maxWidth: 900,
      mx: 'auto',
    },
    link: {
      textDecoration: 'underline',
      ':hover': {
        textDecoration: 'none',
      },
    },
    authForm: {
      maxWidth: 474,
      mx: 'auto',
    },
  },
};
