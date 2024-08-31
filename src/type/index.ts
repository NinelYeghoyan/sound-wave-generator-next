import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export enum BreakPoints {
    xs = 480,
    sm = 768,
    md = 1200,
    lg = 1440,
    xl = 1920,
}

export type SubmenuItemType = {
    id: number;
    title: string;
};

export type SubmenuSectionType = {
    title: string;
    items: SubmenuItemType[];
};

export type SubmenuType = {
    header: string;
    icon?: ReactNode;
    headerClass?: string;
    hasMoreBtn?: boolean;
    category: SubmenuSectionType;
    featured: SubmenuSectionType;
};

export type NavbarType = {
    id: number;
    title: string;
    icon?: ReactNode;
    submenu?: SubmenuType;
    isSecondary?: boolean;
};

export type LanguageType = {
    id: number;
    title: string;
    icon: string;
};

export type PartnersType = {
    id: number;
    logo: string;
    alt: string;
};

export type CardDataType = {
    id: number;
    title: string;
    text: string;
    assetWeb: StaticImageData | string;
    assetMobile: StaticImageData | string;
    alt: string;
    variant?: 'primary' | 'secondary';
};

export type SocialItemType = {
    id: number;
    ref: string;
    logo: ReactNode;
    name: string;
};
