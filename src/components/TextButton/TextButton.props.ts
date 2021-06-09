import { BaseButtonConditionalProps } from '../BaseButton/BaseButton.props';

export interface TextButtonProps extends BaseButtonConditionalProps {
    label: string;
    className?: string;
}
