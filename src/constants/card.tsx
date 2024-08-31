import card1Mobile from '@assets/images/card/card1_sm.webp';
import card1Web from '@assets/images/card/card1_xl.webp';
import card2Mobile from '@assets/images/card/card2_sm.webp';
import card2Web from '@assets/images/card/card2_xl.webp';
import card3Mobile from '@assets/images/card/card3_sm.webp';
import card3Web from '@assets/images/card/card3_xl.webp';
import card4Mobile from '@assets/images/card/card4_sm.webp';
import card4Web from '@assets/images/card/card4_xl.webp';
import card5Mobile from '@assets/images/card/card5_sm.webp';
import card5Web from '@assets/images/card/card5_xl.webp';
import { CardDataType } from '@type/index';

export const cardData: CardDataType[] = [
    {
        id: 1,
        title: 'cardTitle1',
        text: 'cardText1',
        assetWeb: card1Web,
        assetMobile: card1Mobile,
        alt: 'cardTitle1',
    },
    {
        id: 2,
        title: 'cardTitle2',
        text: 'cardText2',
        assetWeb: card2Web,
        assetMobile: card2Mobile,
        alt: 'cardTitle2',
        variant: 'secondary',
    },
    {
        id: 3,
        title: 'cardTitle3',
        text: 'cardText3',
        assetWeb: card3Web,
        assetMobile: card3Mobile,
        alt: 'cardTitle3',
    },
    {
        id: 4,
        title: 'cardTitle4',
        text: 'cardText4',
        assetWeb: card4Web,
        assetMobile: card4Mobile,
        alt: 'cardTitle4',
        variant: 'secondary',
    },
    {
        id: 5,
        title: 'cardTitle5',
        text: 'cardText5',
        assetWeb: card5Web,
        assetMobile: card5Mobile,
        alt: 'cardTitle5',
    },
];
