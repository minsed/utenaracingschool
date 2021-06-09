import { ReactNode } from 'react';

export type BaseButtonProps = BaseButtonBaseProps & BaseButtonConditionalProps;
export type BaseButtonConditionalProps = ButtonBaseA & ButtonBaseButton;

interface BaseButtonBaseProps {
    children?: ReactNode;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

interface ButtonBaseA {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

interface ButtonBaseButton {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
