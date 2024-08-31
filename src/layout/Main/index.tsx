import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Banner from '@components/Banner';
import Card from '@components/Card';
import Partners from '@components/Partners';
import { cardData } from '@constants/card';
import StyledMain from '@layout/Main/styled';

const Main: FC = () => {
    const { t } = useTranslation();

    return (
        <StyledMain className="SG-main">
            <Banner />

            <Partners />

            <div className="SG-main__inner">
                <h2 className="SG-main__title sm-space-pre-line">{t('headerText')}</h2>

                {cardData.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        assetWeb={item.assetWeb}
                        assetMobile={item.assetMobile}
                        alt={item.alt}
                        variant={item.variant}
                    />
                ))}
            </div>
        </StyledMain>
    );
};

export default Main;
