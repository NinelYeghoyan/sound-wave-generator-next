import { FC } from 'react';
import Image from 'next/image';

import StyledLanguageMenu from '@components/LanguageMenu/styled';
import { languageList } from '@constants/language';

const LanguageMenu: FC = () => {
    return (
        <StyledLanguageMenu className="SG-lang-menu">
            {languageList.map((item) => {
                return (
                    <li key={item.id} className="flex align-center cursor-pointer">
                        <div className="SG-lang-menu__asset flex-center">
                            <Image src={item.icon} alt={item.title} width={30} height={30} />
                        </div>

                        <span className="SG-lang-menu__title ml-12">{item.title}</span>
                    </li>
                );
            })}
        </StyledLanguageMenu>
    );
};

export default LanguageMenu;
