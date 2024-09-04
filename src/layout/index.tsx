import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('src/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('src/layout/Footer'), { ssr: false });

type LayoutProps = {
    children: ReactNode;
    className?: string;
};

const Layout: FC<LayoutProps> = ({ children, className }) => {
    return (
        <div className={`${className} SG-layout`}>
            <Header />

            {children}

            <Footer />
        </div>
    );
};

export default Layout;
