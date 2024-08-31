import styled from 'styled-components';

const StyledButton = styled.button<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? '100%' : 'fit-content')};

    font-family: ${({ theme }) => theme.typography.fontFamily.montserrat}, sans-serif;
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    border: none;
    transition: all 0.3s ease 0.05s;

    &.extra-small {
        height: 26px;
        border-radius: ${({ theme }) => theme.borderRadius.radius6};
        font-size: ${({ theme }) => theme.typography.fontSize.p12};
        line-height: 14px;
    }

    &.small {
        height: 36px;
        border-radius: ${({ theme }) => theme.borderRadius.radius8};
        font-size: ${({ theme }) => theme.typography.fontSize.p12};
        line-height: 14px;
    }

    &.medium {
        height: 40px;
        border-radius: ${({ theme }) => theme.borderRadius.radius4};
        font-size: ${({ theme }) => theme.typography.fontSize.p14};
        line-height: 18px;
    }

    &.large {
        height: 54px;
        border-radius: ${({ theme }) => theme.borderRadius.radius8};
        font-size: ${({ theme }) => theme.typography.fontSize.p18};
        line-height: 22px;
    }

    &.primary {
        box-shadow: 0 6px 12px 0 rgba(118, 109, 232, 0.2);
        background-image: linear-gradient(180deg, #8980f7 0%, #4136c1 100%);
        color: ${(p) => p.theme.palette.white};

        &:hover {
            background-image: linear-gradient(180deg, #b5afff 0, #9b94fc 100%);
            box-shadow: 0 6px 24px #766de880;
        }
    }

    &.secondary {
        background-image: linear-gradient(180deg, #5690ff 0%, #3271e6 100%);

        color: ${(p) => p.theme.palette.white};

        &:hover {
            background-image: linear-gradient(180deg, #6ea0ff 0, #518dff 100%);
        }
    }

    &.danger {
        background-color: ${(p) => p.theme.palette.red};
        color: ${(p) => p.theme.palette.white};
    }

    &.outline {
        border: 1px solid ${(p) => p.theme.palette.borderColor};
        background-color: transparent;
        color: ${(p) => p.theme.palette.primaryTextColor};

        &:hover {
            background-color: ${(p) => p.theme.palette.blue};
        }
    }

    &.disable {
        pointer-events: none;
        touch-action: none;
        background-color: ${(p) => p.theme.palette.disableButtonBackgroundColor};
        color: ${(p) => p.theme.palette.disableButtonTextColor};
    }
`;

export default StyledButton;
