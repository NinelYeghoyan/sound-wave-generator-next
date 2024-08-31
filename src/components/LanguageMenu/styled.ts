import styled from 'styled-components';

const StyledLanguageMenu = styled.ul`
    > li {
        height: 50px;
    }

    .SG-lang-menu__asset {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .SG-lang-menu__title {
        font-size: ${(p) => p.theme.typography.fontSize.p12};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 16px;

        color: ${(p) => p.theme.palette.primaryTextColor};
        transition: 0.2s linear;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${(p) => p.theme.typography.fontSize.p14};
            line-height: 18px;
        }

        &:hover {
            color: ${(p) => p.theme.palette.navbarTextColor};
        }
    }
`;

export default StyledLanguageMenu;
