import { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import IconArrow from '@assets/icons/Arrow';
import flag from '@assets/images/flag.svg';
import StyledLanguage from '@components/Language/styled';
import LanguageMenu from '@components/LanguageMenu';
import { useBreakpoint } from '@hooks/useBreakpoint';

const Dropdown = dynamic(() => import('@components/Dropdown'), { ssr: false });

const Language: FC = () => {
    const { mdUp } = useBreakpoint();

    return (
        <StyledLanguage className="SG-language relative">
            <div className="h100 flex-between flex-md-start cursor-pointer">
                <div className="flex align-center">
                    <div className="SG-language__flag flex-center">
                        <Image src={flag} alt="Flag" width={24} height={24} />
                    </div>

                    <p className="SG-language__text md-display-none ml-12">English</p>
                </div>

                <div className="SG-language__icon flex-center">
                    <IconArrow />
                </div>
            </div>

            {mdUp && <Dropdown component={<LanguageMenu />} $isSecondary />}
        </StyledLanguage>
    );
};

export default Language;
