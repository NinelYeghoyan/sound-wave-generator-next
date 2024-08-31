import styled from 'styled-components';

const StyledNavigation = styled.nav`
    &.SG-nav {
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            margin-left: 24px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            margin-left: 40px;
        }
    }

    .SG-nav__item {
        width: 100%;
        height: 60px;

        border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};
        padding-right: 20px;
        padding-left: 20px;
        cursor: pointer;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            width: fit-content;
            height: 100%;

            border: none;
            padding-right: 0;
            padding-left: 0;
            cursor: default;
        }

        ~ .SG-nav__item {
            @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
                margin-left: 12px;
            }

            @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
                margin-left: 16px;
            }
        }

        &.growClass {
            flex-grow: 1;
        }
    }

    .SG-nav__title {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 18px;

        color: ${(p) => p.theme.palette.navbarTextColor};
        transition: 0.2s linear;

        &:hover {
            color: ${(p) => p.theme.palette.primaryTextColor};
        }
    }
`;

export default StyledNavigation;
