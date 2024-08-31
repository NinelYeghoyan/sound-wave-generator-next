import { FC, MouseEvent, useEffect, useRef, useState } from 'react';

import AuthButtons from '@components/AuthButtons';
import Language from '@components/Language';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import StyledHeader from '@layout/Header/styled';

const Header: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpenMenu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpenMenu]);

    const handleToggleMenu = () => {
        setIsOpenMenu((prevState) => !prevState);
        setIsOpenSubmenu(null);
    };

    const handleCloseMenu = () => {
        setIsOpenMenu(false);
        setIsOpenSubmenu(null);
    };

    return (
        <StyledHeader className="SG-header">
            <div className="SG-header__container w100 h100">
                <div className="display-none flex-md-between h100">
                    <div className="h100 flex align-center flex-grow-1">
                        <Logo isHeader />

                        <Navigation />
                    </div>

                    <div className="h100 flex align-center">
                        <Language />

                        <AuthButtons />
                    </div>
                </div>

                <div className="md-display-none h100">
                    <div className="flex-between h100 w100">
                        <Logo isHeader />

                        <button
                            className={`SG-hamburger ${isOpenMenu ? 'SG-hamburger--show' : ''} flex justify-between flex-column cursor-pointer`}
                            type="button"
                            aria-label="Close"
                            onClick={handleToggleMenu}
                        >
                            <span className="SG-hamburger__bar" />
                            <span className="SG-hamburger__bar" />
                        </button>
                    </div>

                    <div
                        className={`SG-mobile-menu__layer ${isOpenMenu ? 'SG-mobile-menu--show' : ''}`}
                        onClick={handleCloseMenu}
                        onKeyDown={handleCloseMenu}
                        role="button"
                        tabIndex={0}
                    >
                        <div
                            className={`SG-mobile-menu__content ${isOpenSubmenu ? 'hidden' : ''}`}
                            ref={menuRef}
                            role="button"
                            tabIndex={0}
                            aria-label="Stop Propagation"
                            onClick={(e: MouseEvent) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                        >
                            <Navigation
                                isOpenSubmenu={isOpenSubmenu}
                                setIsOpenSubmenu={setIsOpenSubmenu}
                                menuRef={menuRef}
                            />

                            <Language />

                            <AuthButtons />
                        </div>
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
