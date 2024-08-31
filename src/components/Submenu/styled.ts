import styled from 'styled-components';

const StyledSubmenu = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    z-index: ${(p) => p.theme.zIndex.index12};

    background-color: ${(p) => p.theme.palette.white};
    transform: translateX(306px);
    transition: all 0.3s ease-in-out;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: initial;
        height: initial;

        position: initial;
        z-index: initial;
        background-color: transparent;
        transform: initial;
        transition: initial;
    }

    &.SG-submenu__mobile--show {
        transform: translateX(0);
    }

    .SG-submenu__header {
        width: 100%;
        height: 60px;

        position: fixed;
        top: 0;

        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 18px;

        border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};
        box-shadow: inset 0 6px 12px 0 rgba(0, 82, 224, 0.101);
        background-color: ${(p) => p.theme.palette.blue100};
        color: ${(p) => p.theme.palette.primaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            height: initial;
            position: initial;
            border-bottom: none;
            border-radius: ${(p) => p.theme.borderRadius.radius8};
            box-shadow: none;

            margin-bottom: 24px;
            color: ${(p) => p.theme.palette.navbarTextColor};
            padding: 16px;
            cursor: pointer;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${(p) => p.theme.typography.fontSize.p16};
            line-height: 20px;
        }
    }

    .SG-submenu__icon {
        width: 32px;
        height: 32px;
        border-radius: ${(p) => p.theme.borderRadius.radius10};

        background-image: linear-gradient(180deg, #47d6e2 0%, #3271e6 100%);
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.3);
        color: ${(p) => p.theme.palette.white};
    }

    .SG-submenu__back {
        border: none;
        padding: 0;
        background-color: transparent;

        width: 32px;
        height: 32px;

        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(p) => p.theme.palette.navbarCategoryColor};
    }

    .SG-submenu__header--title {
        border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            border-bottom: none;
            margin-left: 12px;
        }
    }

    .SG-submenu__container {
        height: 100%;
        max-height: calc(100% - 120px);

        overflow-y: auto;
        padding: 16px 24px;
        margin-top: 60px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            height: initial;
            max-height: initial;
            overflow-y: initial;
            padding: 0;
            margin-top: 0;

            gap: 48px;
        }
    }

    .SG-submenu__category,
    .SG-submenu__featured {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            padding-right: 8px;
            padding-left: 8px;
        }
    }

    .SG-submenu__category {
        border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};
        padding-bottom: 16px;
        margin-bottom: 24px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;

            &:after {
                content: '';
                display: block;
                width: 1px;
                height: 100%;
                background-color: ${(p) => p.theme.palette.borderColor};

                position: absolute;
                top: 0;
                right: -22px;
            }
        }
    }

    .SG-submenu__title {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.bold};
        line-height: 18px;

        margin-bottom: 12px;
        color: ${(p) => p.theme.palette.navbarCategoryColor};
    }

    .SG-submenu__list {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            display: grid;
            column-gap: 32px;
            grid-template-rows: repeat(5, 1fr);
            grid-auto-flow: column;
        }
    }

    .SG-submenu__item {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 18px;

        padding-top: 10px;
        padding-bottom: 10px;
        transition: 0.2s linear;
        color: ${(p) => p.theme.palette.primaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${(p) => p.theme.typography.fontSize.p12};
            line-height: 16px;
            white-space: nowrap;
            padding-top: 8px;
            padding-bottom: 8px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${(p) => p.theme.typography.fontSize.p14};
            line-height: 18px;
        }

        &:hover {
            color: ${(p) => p.theme.palette.navbarTextColor};
        }
    }

    .SG-submenu__btn {
        border: none;
        padding: 0;

        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;

        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 18px;

        border-top: 1px solid ${(p) => p.theme.palette.borderColor};
        box-shadow: 0 -4px 10px 0 rgba(0, 82, 224, 0.08);
        background-color: ${(p) => p.theme.palette.blue100};
        color: ${(p) => p.theme.palette.blue200};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            height: initial;
            position: initial;
            border-top: none;
            box-shadow: none;

            font-size: ${(p) => p.theme.typography.fontSize.p12};
            line-height: 16px;

            background-color: transparent;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${(p) => p.theme.typography.fontSize.p14};
            line-height: 18px;

            margin-top: 24px;
        }
    }

    .blue {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            background-color: ${(p) => p.theme.palette.blue};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f45fe8 0, #766de8 100%);
            }
        }
    }

    .purple {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            background-color: ${(p) => p.theme.palette.purple};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f45fe8 0, #766de8 100%);
            }
        }
    }

    .yellow {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            background-color: ${(p) => p.theme.palette.yellow};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #ffd200 0, #baac00 100%);
            }
        }
    }

    .green {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            background-color: ${(p) => p.theme.palette.green};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #5cf0be 0, #41ba82 100%);
            }
        }
    }

    .rose {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            background-color: ${(p) => p.theme.palette.rose};

            .SG-submenu__icon {
                background-image: linear-gradient(180deg, #f560b6 0, #f2446c 100%);
            }
        }
    }
`;

export default StyledSubmenu;
