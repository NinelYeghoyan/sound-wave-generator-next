import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import StyledNavigation from '@components/Navigation/styled';
import { navbarList, secondaryNavbarList } from '@constants/navbar';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { NavbarType } from '@type/index';
import { normalizeKey } from '@utils/index';

const Dropdown = dynamic(() => import('@components/Dropdown'), { ssr: false });
const Submenu = dynamic(() => import('@components/Submenu'), { ssr: false });

type NavigationProps = {
    isOpenSubmenu?: number | null;
    setIsOpenSubmenu?: Dispatch<SetStateAction<number | null>>;
    menuRef?: RefObject<HTMLDivElement | null>;
};

const Navigation: FC<NavigationProps> = ({ isOpenSubmenu, setIsOpenSubmenu, menuRef }) => {
    const { t } = useTranslation();
    const { mdUp } = useBreakpoint();

    const handleItemClick = (id: number) => {
        if (!mdUp && menuRef?.current) {
            menuRef.current.scrollTo({ top: 0 });
            setIsOpenSubmenu?.(isOpenSubmenu === id ? null : id);
        }
    };

    const renderListItem = (item: NavbarType) => (
        <li
            key={item.id}
            className={`${item.isSecondary} SG-nav__item flex-between flex-md-start md-relative`}
            onClick={() => {
                if (item.submenu) handleItemClick(item.id);
            }}
            onKeyDown={() => {
                if (item.submenu) handleItemClick(item.id);
            }}
        >
            <span className="SG-nav__title">{t(normalizeKey(item.title))}</span>
            {item.icon && <div className="SG-nav__icon flex-center">{item.icon}</div>}

            {!mdUp && item.submenu && (
                <Submenu
                    data={item.submenu}
                    isOpen={isOpenSubmenu}
                    isClose={setIsOpenSubmenu}
                    isActive={isOpenSubmenu === item.id}
                />
            )}

            {mdUp && item.submenu && (
                <Dropdown component={<Submenu data={item.submenu} />} $isSecondary={item.isSecondary} />
            )}
        </li>
    );

    return (
        <StyledNavigation className="SG-nav md-h100 md-flex justify-md-between flex-md-grow-1">
            <ul className="SG-nav__list md-flex h100"> {navbarList.map((item) => renderListItem(item))}</ul>
            <ul className="SG-nav__list md-flex h100"> {secondaryNavbarList.map((item) => renderListItem(item))}</ul>
        </StyledNavigation>
    );
};

export default Navigation;
