import styled from 'styled-components';

const StyledMain = styled.main`
    .SG-main__inner {
        width: 100%;
        max-width: 100%;
        margin: 40px auto;

        border-radius: ${(p) => p.theme.borderRadius.radius24};
        background-color: ${(p) => p.theme.palette.primary};
        padding: 40px 16px;

        @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
            max-width: calc(100vw - 60px);
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            max-width: calc(100vw - 140px);
            border-radius: ${(p) => p.theme.borderRadius.radius28};

            padding: 56px 86px;
            margin-top: 60px;
            margin-bottom: 60px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            max-width: calc(100vw - 240px);

            margin-top: 80px;
            margin-bottom: 96px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            max-width: calc(100vw - 340px);
            border-radius: ${(p) => p.theme.borderRadius.radius32};
        }
    }

    .SG-banner {
        margin-top: 40px;
        margin-bottom: 40px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            margin-top: 18px;
            margin-bottom: 96px;
        }
    }

    .SG-main__title {
        font-size: ${(p) => p.theme.typography.fontSize.p24};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 28px;
        text-align: center;

        margin-bottom: 32px;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p28};
            line-height: 36px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p36};
            line-height: 44px;

            margin-bottom: 56px;
        }
    }
`;

export default StyledMain;
