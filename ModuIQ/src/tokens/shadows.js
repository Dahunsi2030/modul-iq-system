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

export const moduIQShadows = {
    moduIQNone: '0',
    moduIQXSmall: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    moduIQSmall: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    moduIQMedium: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
    moduIQLarge: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    moduIQXLarge: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    moduIQ2XLarge: '0px 25px 50px rgba(0, 0, 0, 0.25)',
    moduIQInner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
    moduIQOutline: '0px 0px 0px 3px rgba(66, 153, 225, 0.6)',
    moduIQElevated: '0px 35px 50px rgba(0, 0, 0, 0.2)',
};

export default moduIQShadows;