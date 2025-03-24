/**
 * @typedef {Object} defaultColors
 * @property {string} Body - default body color
 * @property {string} White - default white color
 * @property {string} Black - default black color
*/

/**
 * @typedef {Object} Colors
 * @property {defaultColors} default - default colors
 * @property {primaryColors} Primary - primary color
 * @property {secondaryColors} Secondary - secondary color
 * @property {tertiaryColors} Tertiary - tertiary color
 * @property {neutralColors} Neutrals - neutral color
*/

/** 
 * @typedef {Object} neutralColors
 * @property {string} "10" - Lightest shade of the neutral color
 * @property {string} "20" - Very light shade of the color (10 series)
 * @property {string} "30" - Light shade of the color (10 series)
 * @property {string} "40" - Slightly light shade of the color (10 series)
 * @property {string} "50" - Medium-light shade of the color (10 series)
 * @property {string} "60" - Medium shade of the color  (10 series)
 * @property {string} "70" - Medium-dark shade of the color (10 series)
 * @property {string} "80" - Dark shade of the color (10 series)
 * @property {string} "90" - Very dark shade of the color (10 series)
 * @property {string} "100" - Darkest shade of the color (100 series) 
 * @property {string} "200" - Darker shade of the color (100 series)
 * @property {string} "300" - Dark shade of the color (100 series)
 * @property {string} "400" - Medium-dark shade of the color (100 series)
 * @property {string} "500" - Default shade of the color (100 series)
 * @property {string} "600" - Medium-light shade of the color (100 series)
 * @property {string} "700" - Light shade of the color (100 series)
 * @property {string} "800" - Slightly light shade of the color (100 series)
 * @property {string} "900" - Very light shade of the color (100 series)
*/

/**
 * @typedef {Object} primaryColors
 * @property {string} "50" - Lightest shade of the primary color
 * @property {string} "100" - Very light shade of the primary color
 * @property {string} "200" - Light shade of the primary color
 * @property {string} "300" - Medium-light shade of the primary color
 * @property {string} "400" - Medium shade of the primary color
 * @property {string} "500" - Default shade of the primary color
 * @property {string} "600" - Medium-dark shade of the primary color
 * @property {string} "700" - Dark shade of the primary color
 * @property {string} "800" - Darker shade of the primary color
 * @property {string} "900" - Darkest shade of the primary color
*/

/**
 * @typedef {Object} secondaryColors
 * @property {string} "50" - Lightest shade of the secondary color
 * @property {string} "100" - Very light shade of the secondary color
 * @property {string} "200" - Light shade of the secondary color
 * @property {string} "300" - Medium-light shade of the secondary color
 * @property {string} "400" - Medium shade of the secondary color
 * @property {string} "500" - Default shade of the secondary color
 * @property {string} "600" - Medium-dark shade of the secondary color
 * @property {string} "700" - Dark shade of the secondary color
 * @property {string} "800" - Darker shade of the secondary color
 * @property {string} "900" - Darkest shade of the secondary color
*/

/**
 * @typedef {Object} tertiaryColors
 * @property {string} "50" - Lightest shade of the tertiary color
 * @property {string} "100" - Very light shade of the tertiary color
 * @property {string} "200" - Light shade of the tertiary color
 * @property {string} "300" - Medium-light shade of the tertiary color
 * @property {string} "400" - Medium shade of the tertiary color
 * @property {string} "500" - Default shade of the tertiary color
 * @property {string} "600" - Medium-dark shade of the tertiary color
 * @property {string} "700" - Dark shade of the tertiary color
 * @property {string} "800" - Darker shade of the tertiary color
 * @property {string} "900" - Darkest shade of the tertiary color
*/


/**
 * Color tokens for the design system
 * @type {Colors}
*/


export const altSystemColors = {

    // default colors
    default: {
        Body: '#000812',
        White: '#FFFFFF',
        Black: '#000000',
    },
    Primary: {                      // Blue
        50: '#E6F0FE',
        100: '#B1D0FB',
        200: '#8BB9F9',
        300: '#5699F6',
        400: '#3284F5',
        500: '#0367F2',
        600: '#035EDC',
        700: '#0249AC',
        800: '#023985',
        900: '#012B66',
    },
    Secondary: {                    // Brown
        50: '#FFF8EF',
        100: '#FFEACC',
        200: '#FFE0B3',
        300: '#FFD190',
        400: '#FFC97B',
        500: '#FFBB5A',
        600: '#E8AA52',
        700: '#B58540',
        800: '#8C6732',
        900: '#6B4F26',
    },
    Tertiary: {                     // Green
        50: '#E6F2F2',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6A',
        500: '#4CAF50',
        600: '#43A047',
        700: '#388E3C',
        800: '#2E7D32',
        900: '#1B5E20',
    },
    Neutrals: {                    // Grey
        10: '#FAFAFA',
        20: '#F5F5F6',
        30: '#EBEBEC',
        40: '#DEDFE0',
        50: '#BFC1C4',
        60: '#B0B2B6',
        70: '#A3A6AA',
        80: '#94979B',
        90: '#85888D',
        100: '#757A7F',
        200: '#666B71',
        300: '#575C63',
        400: '#4A5057',
        500: '#3B4149',
        600: '#2E343D',
        700: '#1C232C',
        800: '#0D141E',
        900: '#000812'
    }
};

export default altSystemColors;