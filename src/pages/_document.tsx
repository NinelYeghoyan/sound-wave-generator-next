import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head />

            <body>
                <div id="BS-page-loading" className="BS-loading">
                    <span className="BS-loading__bullet BS-loading__bullet--single" />
                    <span className="BS-loading__bullet BS-loading__bullet--double" />
                    <span className="BS-loading__bullet BS-loading__bullet--single" />
                    <span className="BS-loading__bullet BS-loading__bullet--double" />
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
