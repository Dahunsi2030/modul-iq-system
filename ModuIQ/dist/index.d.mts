export { h as BodySize, B as BodyVariant, F as FontFamily, f as FontSize, i as FontWeight, g as HeadingSize, H as HeadingVariant, L as LineHeight, j as LineSpacing, l as ModuIQShadows, M as ModuIQSpacing, d as defaultColors, m as moduIQColors, k as moduIQShadows, c as moduIQSpacing, e as moduIQTypography, n as neutralColors, p as primaryColors, a as secondaryColors, s as statusColors, b as tertiaryColors, t as theme } from './theme-BBWbaT0G.mjs';

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
declare const Button: any;

declare namespace moduIQBreakpoint {
    namespace moduIQ {
        const extraSmall: string;
        const small: string;
        const medium: string;
        const large: string;
        const extraLarge: string;
        const extraExtraLarge: string;
    }
}

type ModuIQBreakpoint = {
    /**
     * - Breakpoint for extra small devices (320px)
     */
    extraSmall: string;
    /**
     * - Breakpoint for small devices like phones (576px)
     */
    small: string;
    /**
     * - Breakpoint for medium devices like tablets (768px)
     */
    medium: string;
    /**
     * - Breakpoint for large devices like laptops (992px)
     */
    large: string;
    /**
     * - Breakpoint for extra large devices like desktops (1200px)
     */
    extraLarge: string;
    /**
     * - Breakpoint for extra extra large devices like wide screens (1400px)
     */
    extraExtraLarge: string;
};

declare namespace moduIQBorders {
    namespace radius {
        const None: string;
        const Small: string;
        const Medium: string;
        const Large: string;
        const xLarge: string;
        const Pill: string;
        const Circle: string;
    }
    namespace width {
        const moduIQNone: string;
        const moduIQHairline: string;
        const moduIQThin: string;
        const moduIQMedium: string;
        const moduIQThick: string;
    }
    namespace shadow {
        const moduIQNone_1: string;
        export { moduIQNone_1 as moduIQNone };
        export const moduIQSmall: string;
        const moduIQMedium_1: string;
        export { moduIQMedium_1 as moduIQMedium };
        export const moduIQLarge: string;
        export const moduIQXLarge: string;
    }
}

type BorderRadius = {
    /**
     * - No border radius (0)
     */
    moduIQNone: string;
    /**
     * - Small border radius for subtle rounding (4px)
     */
    moduIQSmall: string;
    /**
     * - Medium border radius for standard rounding (8px)
     */
    moduIQMedium: string;
    /**
     * - Large border radius for prominent rounding (12px)
     */
    moduIQLarge: string;
    /**
     * - Extra large border radius for very prominent rounding (16px)
     */
    moduIQXLarge: string;
    /**
     * - Pill shape with fully rounded sides (9999px)
     */
    moduIQPill: string;
    /**
     * - Perfect circle when width equals height (50%)
     */
    moduIQCircle: string;
};
type BorderWidth = {
    /**
     * - No border (0)
     */
    moduIQNone: string;
    /**
     * - Hairline border, very thin (1px)
     */
    moduIQHairline: string;
    /**
     * - Thin border (2px)
     */
    moduIQThin: string;
    /**
     * - Medium border, standard (4px)
     */
    moduIQMedium: string;
    /**
     * - Thick border, prominent (8px)
     */
    moduIQThick: string;
};
type BorderShadow = {
    /**
     * - No shadow
     */
    moduIQNone: string;
    /**
     * - Small shadow for subtle elevation (0 2px 4px rgba(0, 0, 0, 0.1))
     */
    moduIQSmall: string;
    /**
     * - Medium shadow for standard elevation (0 4px 8px rgba(0, 0, 0, 0.1))
     */
    moduIQMedium: string;
    /**
     * - Large shadow for prominent elevation (0 8px 16px rgba(0, 0, 0, 0.1))
     */
    moduIQLarge: string;
    /**
     * - Extra large shadow for very prominent elevation (0 12px 24px rgba(0, 0, 0, 0.1))
     */
    moduIQXLarge: string;
};
type ModuIQBorders = {
    /**
     * - Border radius tokens
     */
    radius: BorderRadius;
    /**
     * - Border width tokens
     */
    width: BorderWidth;
    /**
     * - Border shadow tokens
     */
    shadow: BorderShadow;
};

export { type BorderRadius, type BorderShadow, type BorderWidth, Button, type ModuIQBorders, type ModuIQBreakpoint, moduIQBorders, moduIQBreakpoint };
