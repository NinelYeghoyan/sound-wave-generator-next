import styled from 'styled-components';

const StyledLanguage = styled.div`
    height: 60px;

    padding-right: 20px;
    padding-left: 20px;
    border-bottom: 1px solid ${(p) => p.theme.palette.borderColor};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 100%;

        border: none;
        padding-right: 0;
        padding-left: 0;
    }

    .SG-language__flag {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid ${(p) => p.theme.palette.borderColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            width: 28px;
            height: 28px;
        }
    }

    .SG-language__text {
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

export default StyledLanguage;
