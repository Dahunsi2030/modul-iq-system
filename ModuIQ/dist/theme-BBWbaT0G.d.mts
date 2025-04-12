type moduIQColors = {
    /**
     * - Default colors
     */
    default: defaultColors;
    /**
     * - Primary color (Blue)
     */
    Primary: primaryColors;
    /**
     * - Secondary color (Brown)
     */
    Secondary: secondaryColors;
    /**
     * - Tertiary color (Green)
     */
    Tertiary: tertiaryColors;
    /**
     * - Neutral color (Grey)
     */
    Neutral: neutralColors;
    /**
     * - Status colors
     */
    status: {
        Success: statusColors;
        Error: statusColors;
        Warning: statusColors;
    };
};
declare namespace moduIQColors {
    namespace moduIQDefault {
        const noBackground: string;
        const moduIQBody: string;
        const moduIQWhite: string;
        const moduIQBlack: string;
    }
    const moduIQPrimary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    const moduIQSecondary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    const moduIQTertiary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    const moduIQNeutral: {
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    namespace moduIQStatus {
        const Success: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        const Error: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        const Warning: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    }
}

type defaultColors = {
    /**
     * - default body color
     */
    Body: string;
    /**
     * - default white color
     */
    White: string;
    /**
     * - default black color
     */
    Black: string;
};
type statusColors = {
    /**
     * "50" - Lightest shade of the status color
     */
    "": string;
};
type neutralColors = {
    /**
     * "10" - Lightest shade (10 series)
     */
    "": string;
};
type primaryColors = {
    /**
     * "50" - Lightest shade of the primary color
     */
    "": string;
};
type secondaryColors = {
    /**
     * "50" - Lightest shade of the secondary color
     */
    "": string;
};
type tertiaryColors = {
    /**
     * "50" - Lightest shade of the tertiary color
     */
    "": string;
};

/**
 * @typedef {Object} ModuIQSpacing
 * @property {string} moduIQBase - Base spacing unit (4px)
 * @property {string} moduIQNone - No spacing (0px)
 * @property {string} moduIQ2xs - Double extra small spacing (2px)
 * @property {string} moduIQxs - Extra small spacing (4px)
 * @property {string} moduIQsm - Small spacing (8px)
 * @property {string} moduIQmd - Medium spacing (12px)
 * @property {string} moduIQlg - Large spacing (16px)
 * @property {string} moduIQxl - Extra large spacing (20px)
 * @property {string} moduIQ2xl - Double extra large spacing (24px)
 * @property {string} moduIQ3xl - Triple extra large spacing (28px)
 * @property {string} moduIQ4xl - Quadruple extra large spacing (32px)
 * @property {string} moduIQ5xl - Quintuple extra large spacing (36px)
 * @property {string} moduIQ6xl - Sextuple extra large spacing (40px)
 * @property {string} moduIQ8xl - Octuple extra large spacing (48px)
 * @property {string} moduIQ10xl - Decuple extra large spacing (56px)
 * @property {string} moduIQ11xl - Undecuple extra large spacing (60px)
 * @property {string} moduIQ12xl - Duodecuple extra large spacing (64px)
*/
/**
 * Spacing token definitions for the ModuIQ Design System
 * @type {ModuIQSpacing}
*/
declare const moduIQSpacing: ModuIQSpacing;

type ModuIQSpacing = {
    /**
     * - Base spacing unit (4px)
     */
    moduIQBase: string;
    /**
     * - No spacing (0px)
     */
    moduIQNone: string;
    /**
     * - Double extra small spacing (2px)
     */
    moduIQ2xs: string;
    /**
     * - Extra small spacing (4px)
     */
    moduIQxs: string;
    /**
     * - Small spacing (8px)
     */
    moduIQsm: string;
    /**
     * - Medium spacing (12px)
     */
    moduIQmd: string;
    /**
     * - Large spacing (16px)
     */
    moduIQlg: string;
    /**
     * - Extra large spacing (20px)
     */
    moduIQxl: string;
    /**
     * - Double extra large spacing (24px)
     */
    moduIQ2xl: string;
    /**
     * - Triple extra large spacing (28px)
     */
    moduIQ3xl: string;
    /**
     * - Quadruple extra large spacing (32px)
     */
    moduIQ4xl: string;
    /**
     * - Quintuple extra large spacing (36px)
     */
    moduIQ5xl: string;
    /**
     * - Sextuple extra large spacing (40px)
     */
    moduIQ6xl: string;
    /**
     * - Octuple extra large spacing (48px)
     */
    moduIQ8xl: string;
    /**
     * - Decuple extra large spacing (56px)
     */
    moduIQ10xl: string;
    /**
     * - Undecuple extra large spacing (60px)
     */
    moduIQ11xl: string;
    /**
     * - Duodecuple extra large spacing (64px)
     */
    moduIQ12xl: string;
};

/**
 * ModuIQ Design System Typography
 * Defines the type scale, font families, weights, and spacing for the design system
 */
type moduIQTypography = {
    /**
     * - Font family definitions
     */
    fontFamily: FontFamily;
    /**
     * - Heading typography configurations
     */
    moduIQHeading: HeadingSize;
    /**
     * - Body text configurations
     */
    moduIQBody: BodySize;
    /**
     * - Font weight definitions
     */
    moduIQFontWeight: FontWeight;
    /**
     * - Line height configurations
     */
    moduIQLineHeight: LineHeight;
    /**
     * - Line spacing configurations
     */
    moduIQLineSpacing: LineSpacing;
};
/**
 * @fileoverview ModuIQ Design System shadow tokens
 * @module moduIQ/tokens/typography
*/
/**
 * ModuIQ Design System Typography
 * Defines the type scale, font families, weights, and spacing for the design system
 * @typedef {Object} moduIQTypography
 * @property {FontFamily} fontFamily - Font family definitions
 * @property {HeadingSize} moduIQHeading - Heading typography configurations
 * @property {BodySize} moduIQBody - Body text configurations
 * @property {FontWeight} moduIQFontWeight - Font weight definitions
 * @property {LineHeight} moduIQLineHeight - Line height configurations
 * @property {LineSpacing} moduIQLineSpacing - Line spacing configurations
*/
/**
 * @typedef {Object} FontFamily
 * @property {string} primary - Primary font family (Almarena)
 * @property {string} secondary - Secondary font family (Euclid Circular A)
*/
/**
 * @typedef {Object} FontSize
 * @property {string} fontSize - Font size in pixels
 */
/**
 * @typedef {Object} HeadingVariant
 * @property {FontSize} regular - Regular weight variant
 * @property {FontSize} bold - Bold weight variant
 */
/**
 * @typedef {Object} BodyVariant
 * @property {FontSize} light - Light weight variant
 * @property {FontSize} regular - Regular weight variant
 * @property {FontSize} bold - Bold weight variant
 */
/**
 * @typedef {Object} HeadingSize
 * @property {HeadingVariant} moduIQSmall - Small heading size (h1: 32px, h2: 24px)
 * @property {HeadingVariant} moduIQXSmall - Extra small heading size (h1: 40px, h2: 32px)
 * @property {HeadingVariant} moduIQBase - Base heading size (h1: 48px, h2: 40px)
 * @property {HeadingVariant} moduIQLarge - Large heading size (h1: 56px, h2: 48px)
 */
/**
 * @typedef {Object} BodySize
 * @property {BodyVariant} moduIQTiny - Tiny text size (12px)
 * @property {BodyVariant} moduIQSmall - Small text size (14px)
 * @property {BodyVariant} moduIQXSmall - Extra small text size (16px)
 * @property {BodyVariant} moduIQBase - Base text size (18px)
 * @property {BodyVariant} moduIQLarge - Large text size (20px)
 * @property {BodyVariant} moduIQXLarge - Extra large text size (24px)
 */
/**
 * @typedef {Object} FontWeight
 * @property {string} light - Light weight (300)
 * @property {string} regular - Regular weight (400)
 * @property {string} medium - Medium weight (500)
 * @property {string} bold - Bold weight (700)
 * @property {string} black - Black weight (900)
 */
/**
 * @typedef {Object} LineHeight
 * @property {string} moduIQXSmall - Extra small line height (16px)
 * @property {string} moduIQSmall - Small line height (20px)
 * @property {string} moduIQBase - Base line height (24px)
 * @property {string} moduIQLarge - Large line height (28px)
 * @property {string} moduIQXLarge - Extra large line height (32px)
 */
/**
 * @typedef {Object} LineSpacing
 * @property {string} moduIQHeading - Heading line spacing (32px)
 * @property {Object} moduIQBody - Body line spacing configuration
 * @property {string} moduIQBody.moduIQTiny - Tiny line spacing (16px)
 * @property {string} moduIQBody.moduIQXSmall - Extra small line spacing (20px)
 * @property {string} moduIQBody.moduIQSmall - Small line spacing (24px)
 * @property {string} moduIQBody.moduIQBase - Base line spacing (28px)
 * @property {string} moduIQBody.moduIQLarge - Large line spacing (32px)
 * @property {string} moduIQBody.moduIQXLarge - Extra large line spacing (36px)
*/
/**
 * Typography tokens for the design system
 * @type {moduIQTypography}
*/
declare const moduIQTypography: moduIQTypography;

type FontFamily = {
    /**
     * - Primary font family (Almarena)
     */
    primary: string;
    /**
     * - Secondary font family (Euclid Circular A)
     */
    secondary: string;
};
type FontSize = {
    /**
     * - Font size in pixels
     */
    fontSize: string;
};
type HeadingVariant = {
    /**
     * - Regular weight variant
     */
    regular: FontSize;
    /**
     * - Bold weight variant
     */
    bold: FontSize;
};
type BodyVariant = {
    /**
     * - Light weight variant
     */
    light: FontSize;
    /**
     * - Regular weight variant
     */
    regular: FontSize;
    /**
     * - Bold weight variant
     */
    bold: FontSize;
};
type HeadingSize = {
    /**
     * - Small heading size (h1: 32px, h2: 24px)
     */
    moduIQSmall: HeadingVariant;
    /**
     * - Extra small heading size (h1: 40px, h2: 32px)
     */
    moduIQXSmall: HeadingVariant;
    /**
     * - Base heading size (h1: 48px, h2: 40px)
     */
    moduIQBase: HeadingVariant;
    /**
     * - Large heading size (h1: 56px, h2: 48px)
     */
    moduIQLarge: HeadingVariant;
};
type BodySize = {
    /**
     * - Tiny text size (12px)
     */
    moduIQTiny: BodyVariant;
    /**
     * - Small text size (14px)
     */
    moduIQSmall: BodyVariant;
    /**
     * - Extra small text size (16px)
     */
    moduIQXSmall: BodyVariant;
    /**
     * - Base text size (18px)
     */
    moduIQBase: BodyVariant;
    /**
     * - Large text size (20px)
     */
    moduIQLarge: BodyVariant;
    /**
     * - Extra large text size (24px)
     */
    moduIQXLarge: BodyVariant;
};
type FontWeight = {
    /**
     * - Light weight (300)
     */
    light: string;
    /**
     * - Regular weight (400)
     */
    regular: string;
    /**
     * - Medium weight (500)
     */
    medium: string;
    /**
     * - Bold weight (700)
     */
    bold: string;
    /**
     * - Black weight (900)
     */
    black: string;
};
type LineHeight = {
    /**
     * - Extra small line height (16px)
     */
    moduIQXSmall: string;
    /**
     * - Small line height (20px)
     */
    moduIQSmall: string;
    /**
     * - Base line height (24px)
     */
    moduIQBase: string;
    /**
     * - Large line height (28px)
     */
    moduIQLarge: string;
    /**
     * - Extra large line height (32px)
     */
    moduIQXLarge: string;
};
type LineSpacing = {
    /**
     * - Heading line spacing (32px)
     */
    moduIQHeading: string;
    /**
     * - Body line spacing configuration
     */
    moduIQBody: {
        moduIQTiny: string;
        moduIQXSmall: string;
        moduIQSmall: string;
        moduIQBase: string;
        moduIQLarge: string;
        moduIQXLarge: string;
    };
};

/**
 * @fileoverview ModuIQ Design System shadow tokens
 * @module moduIQ/tokens/shadows
*/
/**
 * @typedef {Object} ModuIQShadows
 * @property {string} moduIQNone - No shadow
 * @property {string} moduIQXSmall - Extra small shadow for subtle depth
 * @property {string} moduIQSmall - Small shadow for cards and interactive elements
 * @property {string} moduIQMedium - Medium shadow for elevated components
 * @property {string} moduIQLarge - Large shadow for modals and popovers
 * @property {string} moduIQXLarge - Extra large shadow for floating elements
 * @property {string} moduIQ2XLarge - Double extra large shadow for maximum elevation
 * @property {string} moduIQInner - Inset shadow for pressed states
 * @property {string} moduIQOutline - Focus ring shadow with brand color
 * @property {string} moduIQElevated - Maximum elevation shadow for critical UI elements
*/
/**
 * Shadow token definitions for the ModuIQ Design System
 * @type {ModuIQShadows}
*/
declare const moduIQShadows: ModuIQShadows;

type ModuIQShadows = {
    /**
     * - No shadow
     */
    moduIQNone: string;
    /**
     * - Extra small shadow for subtle depth
     */
    moduIQXSmall: string;
    /**
     * - Small shadow for cards and interactive elements
     */
    moduIQSmall: string;
    /**
     * - Medium shadow for elevated components
     */
    moduIQMedium: string;
    /**
     * - Large shadow for modals and popovers
     */
    moduIQLarge: string;
    /**
     * - Extra large shadow for floating elements
     */
    moduIQXLarge: string;
    /**
     * - Double extra large shadow for maximum elevation
     */
    moduIQ2XLarge: string;
    /**
     * - Inset shadow for pressed states
     */
    moduIQInner: string;
    /**
     * - Focus ring shadow with brand color
     */
    moduIQOutline: string;
    /**
     * - Maximum elevation shadow for critical UI elements
     */
    moduIQElevated: string;
};

declare namespace theme {
    export { moduIQColors as colors };
    export { moduIQSpacing as spacing };
    export { moduIQTypography as typography };
    export { moduIQShadows as shadows };
}

export { type BodyVariant as B, type FontFamily as F, type HeadingVariant as H, type LineHeight as L, type ModuIQSpacing as M, type secondaryColors as a, type tertiaryColors as b, moduIQSpacing as c, type defaultColors as d, moduIQTypography as e, type FontSize as f, type HeadingSize as g, type BodySize as h, type FontWeight as i, type LineSpacing as j, moduIQShadows as k, type ModuIQShadows as l, moduIQColors as m, type neutralColors as n, type primaryColors as p, type statusColors as s, theme as t };
