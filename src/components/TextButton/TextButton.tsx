import React, {FC} from 'react';

import BaseButton from '../BaseButton';

import {TextButtonProps} from './TextButton.props';
import './TextButton.scss';

const TextButton: FC<TextButtonProps> = ({
    label = 'TextButton',
    className,
    ...ButtonBaseProps
    }: TextButtonProps) => {
console.log(className);
    return (
        <BaseButton className={className} {...ButtonBaseProps}>
            {label}
        </BaseButton>
    );
};

export default TextButton;
