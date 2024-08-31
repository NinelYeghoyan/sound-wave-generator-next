import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding-top: 24px;
    background-color: ${(p) => p.theme.palette.secondary};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-top: 40px;
    }

    .SG-footer__inner {
        border-top: 1px solid ${(p) => p.theme.palette.borderColor};
    }

    .SG-footer__container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 26px 16px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            padding-right: 32px;
            padding-left: 32px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            max-width: 1320px;

            padding-right: 0;
            padding-left: 0;
        }
    }

    .SG-footer__copyright {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 18px;

        color: ${(p) => p.theme.palette.primaryTextColor};
        margin-top: 16px;
        margin-bottom: 20px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`;

export default StyledFooter;
