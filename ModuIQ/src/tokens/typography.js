/**
 * AltCore Design System Typography
 * Defines the type scale, font families, weights, and spacing for the design system
 * @typedef {Object} altTypography
 * @property {FontFamily} fontFamily - Font family definitions
 * @property {HeadingSize} altHeading - Heading typography configurations
 * @property {BodySize} altBody - Body text configurations
 * @property {FontWeight} altFontWeight - Font weight definitions
 * @property {LineHeight} altLineHeight - Line height configurations
 * @property {LineSpacing} altLineSpacing - Line spacing configurations
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
 * @property {HeadingVariant} altSmall - Small heading size (h1: 32px, h2: 24px)
 * @property {HeadingVariant} altXSmall - Extra small heading size (h1: 40px, h2: 32px)
 * @property {HeadingVariant} altBase - Base heading size (h1: 48px, h2: 40px)
 * @property {HeadingVariant} altLarge - Large heading size (h1: 56px, h2: 48px)
 */

/**
 * @typedef {Object} BodySize
 * @property {BodyVariant} altTiny - Tiny text size (12px)
 * @property {BodyVariant} altSmall - Small text size (14px)
 * @property {BodyVariant} altXSmall - Extra small text size (16px)
 * @property {BodyVariant} altBase - Base text size (18px)
 * @property {BodyVariant} altLarge - Large text size (20px)
 * @property {BodyVariant} altXLarge - Extra large text size (24px)
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
 * @property {string} altXSmall - Extra small line height (16px)
 * @property {string} altSmall - Small line height (20px)
 * @property {string} altBase - Base line height (24px)
 * @property {string} altLarge - Large line height (28px)
 * @property {string} altXLarge - Extra large line height (32px)
 */

/**
 * @typedef {Object} LineSpacing
 * @property {string} altHeading - Heading line spacing (32px)
 * @property {Object} altBody - Body line spacing configuration
 * @property {string} altBody.altTiny - Tiny line spacing (16px)
 * @property {string} altBody.altXSmall - Extra small line spacing (20px)
 * @property {string} altBody.altSmall - Small line spacing (24px)
 * @property {string} altBody.altBase - Base line spacing (28px)
 * @property {string} altBody.altLarge - Large line spacing (32px)
 * @property {string} altBody.altXLarge - Extra large line spacing (36px)
 */


/**
 * Typography tokens for the design system
 * @type {altTypography}
*/

export const altSystemTypography = {

    // font families
    fontFamily: {
        primary: 'Almarena', // primary font
        secondary: 'Euclid Circular A', // secondary font
    },
    

    // altCore Sizes
    altHeading: {
        // Heading 1
        h1: {
            altSmall: {
                regular: {
                    fontSize: '32px',
                },
                bold: {
                    fontSize: '32px',
                },
            },
            altXSmall: {
                regular: {
                    fontSize: '40px',
                },
                bold: {
                    fontSize: '40px',
                },
            },
            altBase: {
                regular: {
                    fontSize: '48px',
                },
                bold: {
                    fontSize: '48px',
                },
            },
            altLarge: {
                regular: {
                    fontSize: '56px',
                },
                bold: {
                    fontSize: '56px',
                },
            },
        },

        // Heading 2
        h2: {
            altSmall: {
                regular: {
                    fontSize: '24px',
                },
                bold: {
                    fontSize: '24px',
                },
            },
            altXSmall: {
                regular: {
                    fontSize: '32px',
                },
                bold: {
                    fontSize: '32px',
                },
            },
            altBase: {
                regular: {
                    fontSize: '40px',
                },
                bold: {
                    fontSize: '40px',
                },
            },
            altLarge: {
                regular: {
                    fontSize: '48px',
                },
                bold: {
                    fontSize: '48px',
                },
            },
        },            
    },

    // alt Body
    altBody: {
        altTiny: {     // Tiny
            light: {
                fontSize: '12px',     // starting size
            },
            regular: {
                fontSize: '12px',
            },
            bold: {
                fontSize: '12px',
            },
        }, 
        altSmall: {    // Small
            light: {
                fontSize: '14px',    // multiple of 4
            },
            regular: {
                fontSize: '14px',
            },
            bold: {
                fontSize: '14px',
            },
        }, 
        altXSmall: {   // xSmall
            light: {
                fontSize: '16px',     // multiple of 4
            },
            regular: {
                fontSize: '16px',
            },
            bold: {
                fontSize: '16px',
            },
        },
        altBase: {     // Base
            light: {
                fontSize: '18px',    // multiple of 4
            },
            regular: {
                fontSize: '18px',
            },
            bold: {
                fontSize: '18px',
            },
        }, 
        altLarge: {    // Large
            light: {
                fontSize: '20px',     // multiple of 4
            },
            regular: { 
                fontSize: '20px',
            },
            bold: {
                fontSize: '20px',
            },
        },  
        altXLarge: {   // xLarge
            light: {
                fontSize: '24px',     // maximum body size
            },
            regular: {
                fontSize: '24px',
            },
            bold: {
                fontSize: '24px',
            },
        }, 
    },

    //altCore Font Weights
    altFontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
    },

    // altCore Line Heights
    altLineHeight: {
        altXSmall: '16px',
        altSmall: '20px',
        altBase: '24px',
        altLarge: '28px',
        altXLarge: '32px',
    },

    // Line Spacing
    altLineSpacing: {
        altHeading: '32px',
        altBody: {            
            altTiny: '16px',      // 16px - smallest
            altXSmall: '20px',    // 20px
            altSmall: '24px',     // 24px
            altBase: '28px',      // 28px
            altLarge: '32px',     // 32px
            altXLarge: '36px',    // 36px - largest
        },
    },
}


export default altSystemTypography;