/**
 * @fileoverview ModuIQ Design System breakpoint tokens
 * @module moduIQ/tokens/breakpoint
*/

/**
 * Breakpoint token definitions for the ModuIQ Design System
 * @type {{moduIQ: ModuIQBreakpoint}}
*/

/**
 * @typedef {Object} ModuIQBreakpoint
 * @property {string} extraSmall - Breakpoint for extra small devices (320px)
 * @property {string} small - Breakpoint for small devices like phones (576px)
 * @property {string} medium - Breakpoint for medium devices like tablets (768px)
 * @property {string} large - Breakpoint for large devices like laptops (992px)
 * @property {string} extraLarge - Breakpoint for extra large devices like desktops (1200px)
 * @property {string} extraExtraLarge - Breakpoint for extra extra large devices like wide screens (1400px)
*/

export const moduIQBreakpoint = {
    moduIQ: {
        extraSmall: '320px', // Extra small devices
        small: '576px', // Small devices
        medium: '768px', // Medium devices
        large: '992px', // Large devices
        extraLarge: '1200px', // Extra large devices
        extraExtraLarge: '1400px', // Extra extra large devices
    },
};

export default moduIQBreakpoint;