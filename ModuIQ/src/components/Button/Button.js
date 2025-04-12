import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton, LoadingSpinner } from './Button.styles';
import * as Phosphor from '@phosphor-icons/react';

/**
 * @typedef {'primary' | 'secondary' | 'destructive' | 'outline' | 'link'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 * @typedef {'thin' | 'light' | 'regular' | 'fill'} IconWeight
*/

/**
 * ModuIQ Design System Button Component
 * @component
 * @param {Object} props - Button props
 * @param {ButtonVariant} [props.variant='primary'] - Button style variant
 * @param {ButtonSize} [props.size='md'] - Button size
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.loading=false] - Whether to show loading state
 * @param {string} [props.leftIcon] - Name of Phosphor icon to show on left
 * @param {string} [props.rightIcon] - Name of Phosphor icon to show on right
 * @param {IconWeight} [props.iconWeight='regular'] - Weight/style of icons
 * @param {React.ReactNode} props.children - Button content
*/

const Button = React.forwardRef(function Button({
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    iconWeight = 'regular',
    children,
    ...props
}, ref) {
    const IconLeft = leftIcon && Phosphor[leftIcon];
    const IconRight = rightIcon && Phosphor[rightIcon];
    const isIconOnly = !children && (leftIcon || rightIcon);

    return (
        <BaseButton
            ref={ref}
            variant={variant}
            size={size}
            disabled={disabled || loading}
            $isIconOnly={isIconOnly}
            {...props}
        >
            {loading && <LoadingSpinner />}
            {!loading && IconLeft && <IconLeft weight={iconWeight} />}
            {children}
            {!loading && IconRight && <IconRight weight={iconWeight} />}
        </BaseButton>
    );
});

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'outline', 'link']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    iconWeight: PropTypes.oneOf(['thin', 'light', 'regular', 'bold', 'fill']),
    children: PropTypes.node
};

export default Button;