import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };

        typography: {
            fontFamily: {
                montserrat: string;
                roboto: string;
                condensed: string;
            };

            fontSize: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                p38: string;
                p36: string;
                p34: string;
                p32: string;
                p30: string;
                p28: string;
                p26: string;
                p24: string;
                p22: string;
                p20: string;
                p18: string;
                p16: string;
                p14: string;
                p12: string;
                p10: string;
                p8: string;
            };

            weight: {
                thin: number;
                light: number;
                regular: number;
                medium: number;
                bold: number;
                black: number;
            };
        };

        borderRadius: {
            radius2: string;
            radius4: string;
            radius6: string;
            radius8: string;
            radius10: string;
            radius12: string;
            radius16: string;
            radius20: string;
            radius24: string;
            radius28: string;
            radius30: string;
            radius32: string;
        };

        zIndex: {
            index1: string;
            index2: string;
            index6: string;
            index8: string;
            index10: string;
            index12: string;
        };

        palette: {
            white: string;
            black: string;
            red: string;
            orange: string;
            blue: string;
            blue100: string;
            blue200: string;
            blue300: string;
            purple: string;
            yellow: string;
            green: string;
            rose: string;

            base: string;
            primary: string;
            secondary: string;
            accent: string;

            primaryTextColor: string;
            secondaryTextColor: string;
            navbarTextColor: string;
            navbarCategoryColor: string;

            primaryButtonBackgroundColor: string;
            primaryButtonTextColor: string;
            secondaryButtonBackgroundColor: string;
            secondaryButtonTextColor: string;
            disableButtonBackgroundColor: string;
            disableButtonTextColor: string;

            borderColor: string;
            scrollbarBackgroundColor: string;

            primaryTransparent: string;
        };
    }
}
