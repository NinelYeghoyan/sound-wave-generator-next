import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 20px 32px;

    border-radius: ${(p) => p.theme.borderRadius.radius30};
    background-image: linear-gradient(135.78deg, #ffffff 33.22%, rgba(255, 255, 255, 0.24) 98.34%);

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 32px 56px;
    }

    ~ .SG-card {
        margin-top: 32px;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            margin-top: 56px;
        }
    }

    .SG-card__title {
        font-size: ${(p) => p.theme.typography.fontSize.p18};
        font-weight: ${(p) => p.theme.typography.weight.black};
        line-height: 28px;

        margin-bottom: 14px;
        color: ${(p) => p.theme.palette.primaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p24};
            line-height: 28px;

            margin-bottom: 16px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p32};
            line-height: 38px;
        }
    }

    .SG-card__text {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 20px;

        color: ${(p) => p.theme.palette.primaryTextColor};

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            font-size: ${({ theme }) => theme.typography.fontSize.p16};
            line-height: 24px;
        }
    }

    &.primary {
        flex-direction: column-reverse;

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            flex-direction: row;
        }

        .SG-card__order1 {
            margin-top: 16px;

            @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
                margin-top: 0;
                margin-right: 30px;
            }

            @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
                margin-right: 56px;
            }
        }
    }

    &.secondary {
        flex-direction: column-reverse;

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            flex-direction: row-reverse;
        }

        .SG-card__order1 {
            margin-top: 16px;

            @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
                margin-top: 0;
                margin-left: 30px;
            }

            @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
                margin-left: 56px;
            }
        }
    }
`;

export default StyledCard;
