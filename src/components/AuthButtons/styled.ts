import styled from 'styled-components';

const StyledAuthButtons = styled.div`
    padding: 30px 18px;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0;
    }

    .BG-button {
        width: 100%;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            width: fit-content;
        }

        ~ .BG-button {
            margin-bottom: 12px;

            @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
                width: fit-content;
                margin-bottom: 0;
                margin-left: 12px;
            }

            @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
                margin-left: 16px;
            }
        }
    }
`;

export default StyledAuthButtons;
