import IconFacebook from '@assets/icons/Facebook';
import IconInstagram from '@assets/icons/Instagram';
import IconPinterest from '@assets/icons/Pinterest';
import IconTwitter from '@assets/icons/Twitter';
import IconYoutube from '@assets/icons/Youtube';
import { SocialItemType } from '@type/index';

export const socialList: SocialItemType[] = [
    {
        id: 1,
        ref: 'https://www.facebook.com/Renderforest/',
        logo: <IconFacebook />,
        name: 'facebook',
    },
    {
        id: 2,
        ref: 'https://www.instagram.com/renderforestcom/',
        logo: <IconInstagram />,
        name: 'instagram',
    },
    {
        id: 3,
        ref: 'https://www.pinterest.com/renderforest/',
        logo: <IconPinterest />,
        name: 'pinterest',
    },
    {
        id: 4,
        ref: 'https://x.com/renderforestcom',
        logo: <IconTwitter />,
        name: 'twitter',
    },
    {
        id: 5,
        ref: 'https://www.youtube.com/user/renderforest',
        logo: <IconYoutube />,
        name: 'youtube',
    },
];
