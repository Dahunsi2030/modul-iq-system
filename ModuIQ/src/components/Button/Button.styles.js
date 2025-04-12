import { styled, css, keyframes } from 'styled-components';
import * as tokens from '../../tokens';

if (!tokens || Object.keys(tokens).length === 0) {
    console.error('Error: tokens is undefined or empty. Please check the import path or token definitions.');
}

/** @typedef {'primary' | 'secondary' | 'destructive' | 'outline' | 'link'} ButtonVariant */
/** @typedef {'sm' | 'md' | 'lg'} ButtonSize */
/** @typedef {'thin' | 'light' | 'regular' | 'fill' } IconWeight */

/**
 * @typedef {Object} ButtonStyleProps
 * @property {ButtonVariant} variant - The variant of the button.
 * @property {ButtonSize} size - The size of the button.
 * @property {boolean} $isIconOnly - Whether the button is an icon-only button.
 * @property {boolean} disabled - Whether the button is disabled.
 * @property {boolean} focus - Whether the button is focused.
 * @property {boolean} loading - Whether the button is in a loading state.
 * @property {string} leftIcon - The name of the left icon.
 * @property {string} rightIcon - The name of the right icon.
 * @property {IconWeight} iconWeight - The weight of the icon.
*/

// Button loading spinner
const spin = keyframes`
    to {transform: rotate(360deg);}
`;

// Shared styles for disabled state
const disabledStyles = css`
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

//Base button styles

export const BaseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: ${props => props.$isIconOnly ? 'center' : 'center'};
    gap: ${tokens.moduIQSpacing.moduIQsm};
    border-radius: ${tokens.moduIQBorders.radius.moduIQMedium};
    font-family: ${tokens.moduIQTypography.fontFamily.primary};
    font-size: ${tokens.moduIQTypography.moduIQBody.moduIQXLarge.regular};
    ${({ $isIconOnly }) => css`
        padding: ${$isIconOnly ? tokens.moduIQSpacing.moduIQNone : `${tokens.moduIQSpacing.moduIQxs} ${tokens.moduIQSpacing.moduIQsm}`};
    `}
    overflow: hidden;
    border: none;
    cursor: pointer;

    ${disabledStyles}

    ${({ $isIconOnly }) => $isIconOnly && css`
        padding: ${tokens.moduIQSpacing.moduIQNone};
    `}

    ${({ variant }) => variantStyles(variant)};
    ${({ size, $isIconOnly }) => sizeStyles(size, $isIconOnly)};
`;

// variant styles
export const variantStyles = (variant) => css`
    // Primary Button
    ${variant === 'primary' && css`
        background: ${tokens.moduIQColors.moduIQPrimary[500]};
        color: ${tokens.moduIQColors.moduIQDefault.moduIQWhite};
        box-shadow: ${tokens.moduIQShadows.moduIQNone};

        &:hover:not(:disabled) {
            background: ${tokens.moduIQColors.moduIQPrimary[600]};
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${tokens.moduIQColors.moduIQPrimary[200]};
        }

        ${disabledStyles}
        &:disabled {
            background: ${tokens.moduIQColors.moduIQPrimary[200]};
            color: ${tokens.moduIQColors.moduIQPrimary[400]};
        }
    `}

    // Secondary Button
    ${variant === 'secondary' && css`
        background: ${tokens.moduIQColors.moduIQPrimary[50]};
        color: ${tokens.moduIQColors.moduIQPrimary[600]};

        &:hover:not(:disabled) {
            background: ${tokens.moduIQColors.moduIQPrimary[100]};
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${tokens.moduIQColors.moduIQPrimary[200]};
        }

        ${disabledStyles}
        &:disabled {
            background: ${tokens.moduIQColors.moduIQPrimary[50]};
            color: ${tokens.moduIQColors.moduIQPrimary[300]};
        }
    `}

    // Destructive Button
    ${variant === 'destructive' && css`
        background: ${tokens.moduIQColors.moduIQStatus.Error[600]};
        color: ${tokens.moduIQColors.moduIQDefault.moduIQWhite};
        box-shadow: ${tokens.moduIQShadows.moduIQNone};

        &:hover:not(:disabled) {
            background: ${tokens.moduIQColors.moduIQStatus.Error[800]};
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${tokens.moduIQColors.moduIQStatus.Error[200]};
        }

        ${disabledStyles}
        &:disabled {
            background: ${tokens.moduIQColors.moduIQStatus.Error[200]};
            color: ${tokens.moduIQColors.moduIQStatus.Error[400]};
        }
    `}

    // Outline Button
    ${variant === 'outline' && css`
        background: ${tokens.moduIQColors.moduIQDefault.noBackground};
        color: ${tokens.moduIQColors.moduIQPrimary[600]};
        border: 2px solid ${tokens.moduIQColors.moduIQPrimary[600]};

        &:hover:not(:disabled) {
            background: ${tokens.moduIQColors.moduIQPrimary[50]};
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${tokens.moduIQColors.moduIQPrimary[200]};
        }

        ${disabledStyles}
        &:disabled {
            border-color: ${tokens.moduIQColors.moduIQPrimary[200]};
            color: ${tokens.moduIQColors.moduIQPrimary[300]};
        }
    `}

    // Link Button
    ${variant === 'link' && css`
        background: ${tokens.moduIQColors.moduIQDefault.noBackground};
        color: ${tokens.moduIQColors.moduIQPrimary[600]};
        text-decoration: underline;

        &:hover:not(:disabled) {
            color: ${tokens.moduIQColors.moduIQPrimary[500]};
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${tokens.moduIQColors.moduIQPrimary[100]};
        }

        ${disabledStyles}
        &:disabled {
            color: ${tokens.moduIQColors.moduIQPrimary[300]};
            text-decoration: none;
        }
    `}
`;

// icon styles
export const sizeStyles = (size, $isIconOnly) => css`
    ${size === 'sm' && css`
        padding: ${$isIconOnly ? tokens.moduIQSpacing.moduIQxs : `${tokens.moduIQSpacing.moduIQxs} ${tokens.moduIQSpacing.moduIQsm}`};
        font-size: ${tokens.moduIQTypography.moduIQBody.moduIQSmall.bold};  
        min-height: ${tokens.moduIQSpacing.moduIQ2xl};  
    `}
    
    ${size === 'md' && css`
        padding: ${$isIconOnly ? tokens.moduIQSpacing.moduIQsm : `${tokens.moduIQSpacing.moduIQsm} ${tokens.moduIQSpacing.moduIQxl}`};
        font-size: ${tokens.moduIQTypography.moduIQBody.moduIQBase.bold};  
        min-height: ${tokens.moduIQSpacing.moduIQ3xl};  
    `}

    ${size === 'lg' && css`
        padding: ${$isIconOnly ? tokens.moduIQSpacing.moduIQxl : `${tokens.moduIQSpacing.moduIQmd} ${tokens.moduIQSpacing.moduIQ2xl}`};
        font-size: ${tokens.moduIQTypography.moduIQBody.moduIQLarge.bold};  
        min-height: ${tokens.moduIQSpacing.moduIQ4xl};  
    `}
`;

// Loading spinner styles
export const LoadingSpinner = styled.div`
    width: 1em;
    height: 1em;
    border-radius: ${tokens.moduIQBorders.radius.Circle};
    border: 2px solid ${tokens.moduIQColors.moduIQDefault.noBackground};
    border-top-color: ${tokens.moduIQColors.moduIQDefault.moduIQWhite};
    animation: ${spin} 1s linear infinite;
`;