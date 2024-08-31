import styled, { css, keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
`;

const StyledWaveAnimation = styled.svg<{ $isPlaying: boolean }>`
    .wave-bar {
        transform-origin: bottom;
        ${({ $isPlaying }) =>
            $isPlaying &&
            css`
                animation: ${waveAnimation} 1s infinite ease-in-out;
            `}
    }

    ${Array.from(
        { length: 80 },
        (_, index) => css`
            .wave-bar:nth-child(${index + 1}) {
                animation-delay: ${index * 0.05}s;
            }
        `,
    )}
`;

export default StyledWaveAnimation;
