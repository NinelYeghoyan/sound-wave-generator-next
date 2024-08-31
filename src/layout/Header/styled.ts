import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 64px;
    position: sticky;
    top: 0;
    z-index: ${(p) => p.theme.zIndex.index6};

    box-shadow: 0 4px 4px 0 rgba(27, 85, 216, 0.06);
    background-color: ${(p) => p.theme.palette.base};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 70px;
        box-shadow: none;
    }

    .SG-header__container {
        max-width: calc(100vw - 48px);
        margin: 0 auto;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            max-width: calc(100vw - 64px);
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            max-width: calc(100vw - 220px);
        }
    }

    .SG-nav__icon,
    .SG-language__icon {
        width: 24px;
        height: 24px;
        transform: rotate(-90deg);

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            transform: rotate(0deg);
        }

        > svg {
            color: ${(p) => p.theme.palette.navbarTextColor};
            transition: all 0.3s ease;
        }
    }

    .SG-nav__item,
    .SG-language {
        &:hover {
            .SG-nav__icon,
            .SG-language__icon {
                > svg {
                    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
                        transform: rotate(-180deg);
                        transform-origin: 50% 52%;
                    }
                }
            }

            .SG-dropdown {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .SG-language {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            margin-right: 14px;
            margin-left: 14px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            margin-right: 24px;
            margin-left: 24px;
        }
    }

    .SG-hamburger {
        border: none;
        padding: 0;
        background: transparent;

        width: 30px;
        height: 20px;
    }

    .SG-hamburger__bar {
        width: 100%;
        height: 4px;

        border-radius: ${(p) => p.theme.borderRadius.radius4};
        background-color: ${(p) => p.theme.palette.blue300};
        transition: all 0.3s ease-in-out;
    }

    .SG-hamburger {
        &.SG-hamburger--show {
            .SG-hamburger__bar {
                &:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }

                &:nth-child(2) {
                    transform: translateY(-8px) rotate(-45deg);
                }
            }
        }
    }

    .SG-mobile-menu__layer {
        width: 100%;
        height: calc(100vh - 64px);

        position: fixed;
        top: 64px;
        left: 0;
        transform: translateX(100%);
        z-index: ${(p) => p.theme.zIndex.index10};

        background-color: ${(p) => p.theme.palette.primaryTransparent};
        backdrop-filter: blur(2px);
        transition:
            background-color 0.3s ease,
            backdrop-filter 0.3s ease;
    }

    .SG-mobile-menu__content {
        width: 306px;
        height: 100%;

        position: absolute;
        right: 0;

        transform: translateX(306px);

        background-color: ${(p) => p.theme.palette.white};
        box-shadow: inset 0 6px 12px 0 rgba(0, 82, 224, 0.101);

        transition: transform 0.3s ease-in-out;
        overflow: hidden auto;

        &.hidden {
            overflow-y: hidden;
        }
    }

    .SG-mobile-menu__layer {
        &.SG-mobile-menu--show {
            transform: translateX(0);

            .SG-mobile-menu__content {
                transform: translateX(0);
            }
        }
    }
`;

export default StyledHeader;
