/**
 * @fileoverview ModuIQ Design System color tokens
 * @module moduIQ/tokens/colors
*/

/**
 * Color token definitions for the ModuIQ Design System
 * @type {moduIQColors}
*/

/**
 * @typedef {Object} defaultColors
 * @property {string} Body - default body color
 * @property {string} White - default white color
 * @property {string} Black - default black color
*/

/**
 * @typedef {Object} statusColors
 * @property {string} "50" - Lightest shade of the status color
 * @property {string} "100" - Very light shade of the status color
 * @property {string} "200" - Light shade of the status color
 * @property {string} "300" - Medium-light shade of the status color
 * @property {string} "400" - Medium shade of the status color
 * @property {string} "500" - Default shade of the status color
 * @property {string} "600" - Medium-dark shade of the status color
 * @property {string} "700" - Dark shade of the status color
 * @property {string} "800" - Darker shade of the status color
 * @property {string} "900" - Darkest shade of the status color
*/

/**
 * @typedef {Object} moduIQColors
 * @property {defaultColors} default - Default colors
 * @property {primaryColors} Primary - Primary color (Blue)
 * @property {secondaryColors} Secondary - Secondary color (Brown)
 * @property {tertiaryColors} Tertiary - Tertiary color (Green)
 * @property {neutralColors} Neutral - Neutral color (Grey)
 * @property {Object} status - Status colors
 * @property {statusColors} status.Success - Success color (Green)
 * @property {statusColors} status.Error - Error color (Red)
 * @property {statusColors} status.Warning - Warning color (Orange)
*/

/** 
 * @typedef {Object} neutralColors
 * @property {string} "10" - Lightest shade (10 series)
 * @property {string} "20" - Very light shade (10 series)
 * @property {string} "30" - Light shade (10 series)
 * @property {string} "40" - Slightly light shade (10 series)
 * @property {string} "50" - Medium-light shade (10 series)
 * @property {string} "60" - Medium shade (10 series)
 * @property {string} "70" - Medium-dark shade (10 series)
 * @property {string} "80" - Dark shade (10 series)
 * @property {string} "90" - Very dark shade (10 series)
 * @property {string} "100" - Darkest shade (100 series) 
 * @property {string} "200" - Darker shade (100 series)
 * @property {string} "300" - Dark shade (100 series)
 * @property {string} "400" - Medium-dark shade (100 series)
 * @property {string} "500" - Default shade (100 series)
 * @property {string} "600" - Medium-light shade (100 series)
 * @property {string} "700" - Light shade (100 series)
 * @property {string} "800" - Slightly light shade (100 series)
 * @property {string} "900" - Very light shade (100 series)
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

export const moduIQColors = {
    moduIQDefault: {
        noBackground: 'transparent',
        moduIQBody: '#000812',
        moduIQWhite: '#FFFFFF',
        moduIQBlack: '#000000',
    },
    moduIQPrimary: {
        50: '#f1f1ff',
        100: '#e6e5ff',
        200: '#cfcfff',
        300: '#aca8ff',
        400: '#8477ff',
        500: '#5d40ff',
        600: '#4a1aff',
        700: '#3606f1',
        800: '#2f06d1',
        900: '#2907ab',
    },
    moduIQSecondary: {
        50: '#fdffe7',
        100: '#f9ffc1',
        200: '#f7ff86',
        300: '#fbff41',
        400: '#fff90d',
        500: '#feea00',
        600: '#d1ae00',
        700: '#a67e02',
        800: '#89620a',
        900: '#74500f',
    },
    moduIQTertiary: {
        50: '#ecfdf3',
        100: '#d1fae1',
        200: '#a8f2c8',
        300: '#6fe6ab',
        400: '#36d188',
        500: '#12b76f',
        600: '#07945a',
        700: '#05774a',
        800: '#075d3c',
        900: '#074d34',
    },
    moduIQNeutral: {
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
    },
    moduIQStatus: {
        Success: {
            50: '#E8F5E9',
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
        Error: {
            50: '#FFEBEE',
            100: '#FFCDD2',
            200: '#EF9A9A',
            300: '#E57373',
            400: '#EF5350',
            500: '#F44336',
            600: '#E53935',
            700: '#D32F2F',
            800: '#C62828',
            900: '#B71C1C',
        },
        Warning: {
            50: '#FFF3E0',
            100: '#FFE0B2',
            200: '#FFCC80',
            300: '#FFB74D',
            400: '#FFA726',
            500: '#FF9800',
            600: '#FB8C00',
            700: '#F57C00',
            800: '#EF6C00',
            900: '#E65100',
        }
    }
};

export default moduIQColors;