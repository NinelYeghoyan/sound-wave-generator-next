import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';

import { normalizeKey } from '@utils/index';

type ResponsiveImageProps = {
    assetWeb: StaticImageData | string;
    assetMobile: StaticImageData | string;
    isPriority?: boolean;
    alt: string;
};

const ResponsiveImage: FC<ResponsiveImageProps> = ({ assetWeb, assetMobile, isPriority, alt }) => {
    const { t } = useTranslation();

    return (
        <>
            <Image
                src={assetMobile}
                alt={t(normalizeKey(alt))}
                draggable="false"
                priority={isPriority}
                className="responsive-img xs-display-none"
            />
            <Image
                src={assetWeb}
                alt={t(normalizeKey(alt))}
                draggable="false"
                priority={isPriority}
                className="responsive-img display-none xs-block"
            />
        </>
    );
};

export default ResponsiveImage;
