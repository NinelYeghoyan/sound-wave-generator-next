import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import colorfulLogo from '@assets/images/logo_colorful.svg';
import colorlessLogo from '@assets/images/logo_colorless.svg';
import mobileLogo from '@assets/images/logo_small.svg';

type LogoProps = {
    isHeader?: boolean;
};

const Logo: FC<LogoProps> = ({ isHeader = false }) => {
    return (
        <div className="SG-logo">
            <Link href="https://www.renderforest.com/" target="_blank" rel="noreferrer" className="SG-logo block">
                {isHeader && (
                    <>
                        <Image
                            src={mobileLogo}
                            alt="Header Logo"
                            width={31}
                            height={40}
                            draggable="false"
                            className="xl-display-none"
                        />
                        <Image
                            src={colorfulLogo}
                            alt="Header Logo"
                            width={175}
                            height={40}
                            draggable="false"
                            className="display-none xl-block"
                        />
                    </>
                )}

                {!isHeader && <Image src={colorlessLogo} alt="Footer Logo" width={158} height={36} />}
            </Link>
        </div>
    );
};

export default Logo;
