import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import StyledButton from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger' | 'disable' | 'outline';
    size?: 'extra-small' | 'small' | 'medium' | 'large';
    isFullWidth?: boolean;
    className?: string;
};

const Button: FC<ButtonProps> = ({
    children,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    isFullWidth = false,
    className = '',
    ...rest
}) => (
    <StyledButton
        type={type}
        $isFullWidth={isFullWidth}
        className={`BG-button ${size} ${variant} ${className} shrink-0 cursor-pointer`}
        {...rest}
    >
        {children}
    </StyledButton>
);

export default Button;
