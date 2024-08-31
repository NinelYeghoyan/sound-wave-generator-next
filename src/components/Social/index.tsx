import { FC } from 'react';
import Link from 'next/link';

import { socialList } from '@constants/social';

import { StyledSocial } from './styled';

export const Social: FC = () => {
    return (
        <StyledSocial className="SG-social flex align-center">
            {socialList.map((item) => {
                return (
                    <li key={item.id}>
                        <Link href={item.ref} rel="noreferrer" target="_blank" aria-label="logo">
                            {item.logo}
                        </Link>
                    </li>
                );
            })}
        </StyledSocial>
    );
};
