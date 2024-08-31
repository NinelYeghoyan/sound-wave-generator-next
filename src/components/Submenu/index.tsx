import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import IconChevronLeft from '@assets/icons/ChevronLeft';
import IconMore from '@assets/icons/More';
import StyledSubmenu from '@components/Submenu/styled';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { SubmenuType } from '@type/index';
import { normalizeKey } from '@utils/index';

type SubmenuProps = {
    data: SubmenuType;
    isOpen?: number | null;
    isClose?: Dispatch<SetStateAction<number | null>>;
    isActive?: boolean;
};

const Submenu: FC<SubmenuProps> = ({ data, isOpen, isClose, isActive }) => {
    const { t } = useTranslation();
    const { mdUp } = useBreakpoint();

    const handleCloseSubmenu = () => {
        isClose?.(null);
    };

    return (
        <StyledSubmenu
            className={`SG-submenu ${isOpen && isActive ? 'SG-submenu__mobile--show' : ''}`}
            onClick={(e) => e.stopPropagation()}
        >
            {data.header && (
                <div
                    className={`SG-submenu__header ${data.headerClass} flex align-center justify-center justify-md-start`}
                >
                    {data.icon && mdUp && <div className="SG-submenu__icon flex-center flex-shrink-0">{data.icon}</div>}

                    {!mdUp && (
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={handleCloseSubmenu}
                            className="SG-submenu__back flex-center cursor-pointer"
                        >
                            <IconChevronLeft />
                        </button>
                    )}

                    <h3 className="SG-submenu__header--title">{t(normalizeKey(data.header))}</h3>
                </div>
            )}

            <div className="SG-submenu__container md-flex">
                {data.category && (
                    <div className="SG-submenu__category relative">
                        <h4 className="SG-submenu__title">{t(normalizeKey(data.category.title))}</h4>

                        <ul className="SG-submenu__list">
                            {data.category.items.map((item) => (
                                <li key={item.id} className="SG-submenu__item cursor-pointer">
                                    {t(normalizeKey(item.title))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {data.featured && (
                    <div className="SG-submenu__featured relative">
                        <h4 className="SG-submenu__title">{t(normalizeKey(data.featured.title))}</h4>

                        <ul className="SG-submenu__list">
                            {data.featured.items.map((item) => (
                                <li key={item.id} className="SG-submenu__item cursor-pointer">
                                    {t(normalizeKey(item.title))}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {data.hasMoreBtn && (
                <button type="button" className="SG-submenu__btn flex-center cursor-pointer">
                    <span className="mr-8">{t('browseMore')}</span>
                    <IconMore />
                </button>
            )}
        </StyledSubmenu>
    );
};

export default Submenu;
