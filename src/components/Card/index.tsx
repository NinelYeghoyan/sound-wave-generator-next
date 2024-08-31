import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';

import StyledCard from '@components/Card/styled';
import ResponsiveImage from '@components/ResponsiveImage';
import { normalizeKey } from '@utils/index';

type CardProps = {
    title: string;
    text: string;
    assetWeb: StaticImageData | string;
    assetMobile: StaticImageData | string;
    alt: string;
    variant?: 'primary' | 'secondary';
};

const Card: FC<CardProps> = ({
    title = '',
    text = '',
    assetWeb = '',
    assetMobile = '',
    alt = '',
    variant = 'primary',
}) => {
    const { t } = useTranslation();

    return (
        <StyledCard className={`SG-card flex align-sm-center ${variant}`}>
            <div className="SG-card__order1 sm-w50">
                <h3 className="SG-card__title xl-space-pre-line">{t(normalizeKey(title))}</h3>
                <p className="SG-card__text xl-space-pre-line">{t(normalizeKey(text))}</p>
            </div>

            <div className="SG-card__order2 sm-w50">
                <ResponsiveImage assetWeb={assetWeb} assetMobile={assetMobile} alt={alt} />
            </div>
        </StyledCard>
    );
};

export default Card;
