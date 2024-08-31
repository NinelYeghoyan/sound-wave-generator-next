import styled from 'styled-components';

const StyledBanner = styled.div`
    border-radius: ${(p) => p.theme.borderRadius.radius24};
    background: linear-gradient(180deg, #eff8ff 0%, #c7e4ff 45.51%, #9aceff 65.12%, #6272ff 100%);

    padding: 40px 16px;
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        max-width: calc(100vw - 32px);
        background-image: radial-gradient(
            81.41% 207.84% at 17.81% 36.38%,
            #eff8ff 0%,
            #b6dbfd 45.08%,
            #9aceff 61.89%,
            #6272ff 100%
        );
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: calc(100vw - 64px);
        border-radius: ${(p) => p.theme.borderRadius.radius28};

        padding: 56px 86px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        border-radius: ${(p) => p.theme.borderRadius.radius30};
        padding: 110px 138px;
    }

    .SG-banner__order {
        ~ .SG-banner__order {
            margin-top: 40px;

            @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
                margin-top: 0;
                margin-left: 60px;
            }

            @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
                margin-left: 100px;
            }
        }
    }

    .SG-banner__title {
        font-size: ${(p) => p.theme.typography.fontSize.p32};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 40px;
        text-align: center;

        color: ${(p) => p.theme.palette.primaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            text-align: left;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p38};
            line-height: 46px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
            font-size: ${({ theme }) => theme.typography.fontSize.h1};
            line-height: 68px;
        }
    }

    .SG-banner__text {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 24px;
        text-align: center;

        margin-top: 16px;
        margin-bottom: 32px;
        color: ${(p) => p.theme.palette.secondaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            text-align: left;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p16};
            line-height: 24px;

            margin-bottom: 40px;
        }
    }

    .BG-button {
        width: 100%;

        @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
            width: fit-content;
        }
    }
`;

export default StyledBanner;
