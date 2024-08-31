import booking from '@assets/images/partners/booking_logo.svg';
import hootsuite from '@assets/images/partners/hootsuite_logo.svg';
import meta from '@assets/images/partners/meta_logo.svg';
import nike from '@assets/images/partners/nike_logo.svg';
import stanford from '@assets/images/partners/stanford_logo.svg';
import { PartnersType } from '@type/index';

export const partnersList: PartnersType[] = [
    {
        id: 1,
        logo: stanford,
        alt: 'Stanford Logo',
    },
    {
        id: 2,
        logo: meta,
        alt: 'Meta Logo',
    },
    {
        id: 3,
        logo: booking,
        alt: 'Booking Logo',
    },
    {
        id: 4,
        logo: hootsuite,
        alt: 'Hootsuite Logo',
    },
    {
        id: 5,
        logo: nike,
        alt: 'Nike Logo',
    },
];
