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

export const moduIQTypography = {
    fontFamily: {
        primary: 'Urbanist',
    },

    moduIQHeading: {
        h1: {
            moduIQSmall: {
                regular: { fontSize: '32px' },
                bold: { fontSize: '32px' },
            },
            moduIQXSmall: {
                regular: { fontSize: '40px' },
                bold: { fontSize: '40px' },
            },
            moduIQBase: {
                regular: { fontSize: '48px' },
                bold: { fontSize: '48px' },
            },
            moduIQLarge: {
                regular: { fontSize: '56px' },
                bold: { fontSize: '56px' },
            },
        },
        h2: {
            moduIQSmall: {
                regular: { fontSize: '24px' },
                bold: { fontSize: '24px' },
            },
            moduIQXSmall: {
                regular: { fontSize: '32px' },
                bold: { fontSize: '32px' },
            },
            moduIQBase: {
                regular: { fontSize: '40px' },
                bold: { fontSize: '40px' },
            },
            moduIQLarge: {
                regular: { fontSize: '48px' },
                bold: { fontSize: '48px' },
            },
        },            
    },

    moduIQBody: {
        moduIQTiny: {
            light: { fontSize: '12px' },
            regular: { fontSize: '12px' },
            bold: { fontSize: '12px' },
        }, 
        moduIQSmall: {
            light: { fontSize: '14px' },
            regular: { fontSize: '14px' },
            bold: { fontSize: '14px' },
        }, 
        moduIQXSmall: {
            light: { fontSize: '16px' },
            regular: { fontSize: '16px' },
            bold: { fontSize: '16px' },
        },
        moduIQBase: {
            light: { fontSize: '18px' },
            regular: { fontSize: '18px' },
            bold: { fontSize: '18px' },
        }, 
        moduIQLarge: {
            light: { fontSize: '20px' },
            regular: { fontSize: '20px' },
            bold: { fontSize: '20px' },
        },  
        moduIQXLarge: {
            light: { fontSize: '24px' },
            regular: { fontSize: '24px' },
            bold: { fontSize: '24px' },
        }, 
    },

    moduIQFontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
    },

    moduIQLineHeight: {
        moduIQXSmall: '16px',
        moduIQSmall: '20px',
        moduIQBase: '24px',
        moduIQLarge: '28px',
        moduIQXLarge: '32px',
    },

    moduIQLineSpacing: {
        moduIQHeading: '32px',
        moduIQBody: {
            moduIQTiny: '16px',
            moduIQXSmall: '20px',
            moduIQSmall: '24px',
            moduIQBase: '28px',
            moduIQLarge: '32px',
            moduIQXLarge: '36px',
        },
    },
}

export default moduIQTypography;