import styled from 'styled-components';

export const StyledSocial = styled.ul`
    > li {
        color: ${(p) => p.theme.palette.primaryTextColor};
        transition: opacity 0.4s ease;

        ~ li {
            margin-left: 24px;
        }

        &:hover {
            opacity: 0.6;
        }
    }

    a {
        width: 100%;
        height: 100%;
        display: block;

        color: inherit;
    }
`;
