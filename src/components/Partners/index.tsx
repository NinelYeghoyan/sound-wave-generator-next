import { FC } from 'react';
import Image from 'next/image';
import { Trans } from 'react-i18next';

import { StyledPartners } from '@components/Partners/styled';
import { partnersList } from '@constants/partners';

const Partners: FC = () => {
    return (
        <StyledPartners className="SG-partners">
            <div className="SG-partners__header flex-center sm-relative">
                <p className="SG-partners__title flex-sm-shrink-0">
                    <Trans
                        i18nKey="partnersTitle"
                        components={{
                            strong: <span />,
                        }}
                        values={{
                            users: '25M+',
                            companies: '100k+',
                        }}
                    />
                </p>
            </div>

            <ul className="SG-partners__list flex-center flex-wrap">
                {partnersList.map((item) => {
                    return (
                        <li key={item.id}>
                            <Image src={item.logo} alt={item.alt} className="responsive-img" />
                        </li>
                    );
                })}
            </ul>
        </StyledPartners>
    );
};

export default Partners;
