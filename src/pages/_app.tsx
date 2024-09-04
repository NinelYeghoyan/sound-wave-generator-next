import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Layout from '@layout/index';
import { Montserrat } from '@next/font/google';
import GlobalStyles from '@styles/theme/global.styled';
import theme from '@styles/theme/theme';

import '@styles/scss/styles.scss';

import '@i18n/config';

const montserrat = Montserrat({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('BS-page-loading');
            if (loader) loader.remove();
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Layout className={montserrat.className}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
