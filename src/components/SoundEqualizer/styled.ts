import styled from 'styled-components';

export const StyledSoundEqualizer = styled.div`
    z-index: ${(p) => p.theme.zIndex.index1};

    .SG-wave-animation {
        width: 84%;

        position: relative;
        z-index: -1;

        transform: translate(18%, 12px);
    }
`;
