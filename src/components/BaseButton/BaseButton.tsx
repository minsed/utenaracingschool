import React, { FC } from 'react';
import { BaseButtonProps } from './BaseButton.props';

import './BaseButton.scss';

const BaseButton: FC<BaseButtonProps> = ({
    href,
    onClick,
    type,
    target,
    className,
    disabled,
    children,
    ...baseProps
}: BaseButtonProps) => {
    if (href) {
        return (
            <a className={className} target={target} href={href} {...baseProps}>
                {children}
            </a>
        );
    }

    if (onClick || type) {
        return (
            <button
                className={className}
                type={type}
                onClick={onClick}
                disabled={disabled}
                {...baseProps}
            >
                {children}
            </button>
        );
    }

    return (
        <div className={className} {...baseProps}>
            {children}
        </div>
    );
}

export default BaseButton