import styled from 'styled-components';

const StyledDropdown = styled.div<{ $isSecondary: boolean }>`
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: ${(props) => (props.$isSecondary ? 'initial' : '-20px')};
    right: ${(props) => (props.$isSecondary ? '-20px' : 'initial')};

    z-index: ${(p) => p.theme.zIndex.index8};

    visibility: hidden;
    opacity: 0;

    border-radius: ${(p) => p.theme.borderRadius.radius16};
    box-shadow: 0 2px 12px 0 rgba(0, 82, 224, 0.12);
    background-color: ${(p) => p.theme.palette.white};

    padding: 24px;
`;

export default StyledDropdown;
