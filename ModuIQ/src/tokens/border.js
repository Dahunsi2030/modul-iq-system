/**
 * @fileoverview ModuIQ Design System border tokens
 * @module moduIQ/tokens/borders
*/

/**
 * Border token definitions for the ModuIQ Design System
 * @type {ModuIQBorders}
*/

/**
 * @typedef {Object} BorderRadius
 * @property {string} moduIQNone - No border radius (0)
 * @property {string} moduIQSmall - Small border radius for subtle rounding (4px)
 * @property {string} moduIQMedium - Medium border radius for standard rounding (8px)
 * @property {string} moduIQLarge - Large border radius for prominent rounding (12px)
 * @property {string} moduIQXLarge - Extra large border radius for very prominent rounding (16px)
 * @property {string} moduIQPill - Pill shape with fully rounded sides (9999px)
 * @property {string} moduIQCircle - Perfect circle when width equals height (50%)
*/

/**
 * @typedef {Object} BorderWidth
 * @property {string} moduIQNone - No border (0)
 * @property {string} moduIQHairline - Hairline border, very thin (1px)
 * @property {string} moduIQThin - Thin border (2px)
 * @property {string} moduIQMedium - Medium border, standard (4px)
 * @property {string} moduIQThick - Thick border, prominent (8px)
*/

/**
 * @typedef {Object} BorderShadow
 * @property {string} moduIQNone - No shadow
 * @property {string} moduIQSmall - Small shadow for subtle elevation (0 2px 4px rgba(0, 0, 0, 0.1))
 * @property {string} moduIQMedium - Medium shadow for standard elevation (0 4px 8px rgba(0, 0, 0, 0.1))
 * @property {string} moduIQLarge - Large shadow for prominent elevation (0 8px 16px rgba(0, 0, 0, 0.1))
 * @property {string} moduIQXLarge - Extra large shadow for very prominent elevation (0 12px 24px rgba(0, 0, 0, 0.1))
*/

/**
 * @typedef {Object} ModuIQBorders
 * @property {BorderRadius} radius - Border radius tokens
 * @property {BorderWidth} width - Border width tokens
 * @property {BorderShadow} shadow - Border shadow tokens
*/

export const moduIQBorders = {
    // Border radius
    radius: {
        None: '0',         // No border radius
        Small: '4px',      // Small border radius - subtle rounding
        Medium: '8px',     // Medium border radius - standard rounding
        Large: '12px',     // Large border radius - prominent rounding
        xLarge: '16px',    // Extra large border radius - very prominent rounding
        Pill: '9999px',    // Pill shape - fully rounded sides
        Circle: '50%',     // Perfect circle when width equals height
    },

    // Border width
    width: {
        moduIQNone: '0',         // No border
        moduIQHairline: '1px',   // Hairline border - very thin
        moduIQThin: '2px',       // Thin border - thin
        moduIQMedium: '4px',     // Medium border - standard
        moduIQThick: '8px',      // Thick border - prominent
    },

    shadow: {
        moduIQNone: 'none',      // No shadow
        moduIQSmall: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Small shadow - subtle
        moduIQMedium: '0 4px 8px rgba(0, 0, 0, 0.1)', // Medium shadow - standard
        moduIQLarge: '0 8px 16px rgba(0, 0, 0, 0.1)', // Large shadow - prominent
        moduIQXLarge: '0 12px 24px rgba(0, 0, 0, 0.1)', // Extra large shadow - very prominent
    },
}

export default moduIQBorders;