import styled from 'styled-components';

export const StyledPartners = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    padding-right: 16px;
    padding-left: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-right: 0;
        padding-left: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: calc(100vw - 240px);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: calc(100vw - 340px);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        max-width: calc(100vw - 526px);
    }

    .SG-partners__header {
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            &:before,
            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
            }

            &:before {
                background-image: linear-gradient(270deg, #c1c9e0 0%, rgba(193, 201, 224, 0) 100%);
                margin-right: 30px;
            }

            &:after {
                background-image: linear-gradient(90deg, #c1c9e0 0%, rgba(193, 201, 224, 0) 100%);
                margin-left: 30px;
            }
        }
    }

    .SG-partners__title {
        font-size: ${(p) => p.theme.typography.fontSize.p16};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 20px;
        text-align: center;

        > span {
            font-weight: ${(p) => p.theme.typography.weight.black};
        }
    }

    .SG-partners__list {
        margin-top: 12px;
    }
`;
