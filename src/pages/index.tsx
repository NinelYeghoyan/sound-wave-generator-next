import dynamic from 'next/dynamic';
import Head from 'next/head';

const Main = dynamic(() => import('src/layout/Main'), { ssr: false });
const Header = dynamic(() => import('src/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('src/layout/Footer'), { ssr: false });

const Home = () => {
    return (
        <>
            <Head>
                <title>Sound Wave Generator</title>
                <meta
                    name="description"
                    content="Time to get your brand noticed. Create professional videos, logos, mockups, websites, and graphics — all in one place. Get started now!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    {`
                  @keyframes single {
                      0% {
                          transform: translateY(3px);
                      }
          
                      50% {
                          transform: translateY(-3px);
                      }
          
                      100% {
                          transform: translateY(3px);
                      }
                  }
            
                  @keyframes double {
                      0% {
                          transform: translateY(-3px);
                      }
          
                      50% {
                          transform: translateY(3px);
                      }
          
                      100% {
                          transform: translateY(-3px);
                      }
                  }
          
                  .BS-loading {
                      width: 100%;
                      height: 100%;
          
                      display: flex;
                      align-items: center;
                      justify-content: center;
          
                      position: fixed;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                      z-index: 999;
                      background-color: #F9FBFE;
                  }
            
                  .BS-loading__bullet {
                      width: 12px;
                      height: 12px;
                      border-radius: 50%;
          
                      display: inline-block;
          
                      margin-left: 4px;
          
                      background-image: radial-gradient(
                              81.41% 207.84% at 17.81% 36.38%,
                              #eff8ff 0%,
                              #b6dbfd 45.08%,
                              #9aceff 61.89%,
                              #6272ff 100%
                      );
                  }
            
                  .BS-loading__bullet--single {
                      animation: 0.6s linear 0s infinite normal none running single;
                  }
          
                  .BS-loading__bullet--double {
                      animation: 0.6s linear 0s infinite normal none running double;
                  }
                  `}
                </style>
            </Head>

            <Header />

            <Main />

            <Footer />
        </>
    );
};

export default Home;
