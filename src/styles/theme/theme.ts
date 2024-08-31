import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
    breakpoints: {
        xs: '480px',
        sm: '768px',
        md: '1200px',
        lg: '1440px',
        xl: '1920px',
    },

    typography: {
        fontFamily: {
            montserrat: 'Montserrat',
            roboto: 'Roboto',
            condensed: 'Roboto Condensed',
        },

        fontSize: {
            h1: '68px',
            h2: '48px',
            h3: '46px',
            h4: '44px',
            h5: '42px',
            h6: '40px',
            p38: '38px',
            p36: '36px',
            p34: '34px',
            p32: '32px',
            p30: '30px',
            p28: '28px',
            p26: '26px',
            p24: '24px',
            p22: '22px',
            p20: '20px',
            p18: '18px',
            p16: '16px',
            p14: '14px',
            p12: '12px',
            p10: '10px',
            p8: '8px',
        },

        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
            black: 700,
        },
    },

    borderRadius: {
        radius2: '2px',
        radius4: '4px',
        radius6: '6px',
        radius8: '8px',
        radius10: '10px',
        radius12: '12px',
        radius16: '16px',
        radius20: '20px',
        radius24: '24px',
        radius28: '28px',
        radius30: '30px',
        radius32: '32px',
    },

    zIndex: {
        index1: '1',
        index2: '2',
        index6: '6',
        index8: '8',
        index10: '10',
        index12: '12',
    },

    palette: {
        white: '#ffffff',
        black: '#000000',
        red: '#f14644',
        orange: '#FFAD00',
        blue: '#eef5ff',
        blue100: '#f5f8fe',
        blue200: '#3271E6',
        blue300: '#353E5A',
        purple: '#fbf4ff',
        yellow: '#fffadf',
        green: '#ecfff8',
        rose: '#fff1f8',

        base: '#F9FBFE',
        primary: '#E2D7FF',
        secondary: '#FAF8F4',
        accent: '#fff37a',

        primaryTextColor: '#252e48',
        secondaryTextColor: '#282828',
        navbarTextColor: '#545F7E',
        navbarCategoryColor: '#7683A8',

        primaryButtonBackgroundColor: '#fff37a',
        primaryButtonTextColor: '#242529',
        secondaryButtonBackgroundColor: '#363538',
        secondaryButtonTextColor: '#fdebdd',
        disableButtonBackgroundColor: 'rgba(54, 53, 56, 0.4)',
        disableButtonTextColor: 'rgba(255, 255, 255, 0.4)',

        borderColor: '#C1C9E0',
        scrollbarBackgroundColor: '#E2D7FF',

        primaryTransparent: 'rgba(37, 46, 72, 0.4)',
    },
};

export default defaultTheme;
