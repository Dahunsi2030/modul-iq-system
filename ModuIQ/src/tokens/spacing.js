/**
 * @fileoverview ModuIQ Design System spacing tokens
 * @module moduIQ/tokens/spacing
*/

const baseUnit = 4; // 4px

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

export const moduIQSpacing = {
    moduIQBase: `${baseUnit}px`,  // 4px
    moduIQNone: `0`, // 0px
    moduIQ2xs: `${baseUnit * 0.5}px`, // 2px
    moduIQxs: `${baseUnit}px`, // 4px
    moduIQsm: `${baseUnit * 2}px`, // 8px
    moduIQmd: `${baseUnit * 3}px`, // 12px
    moduIQlg: `${baseUnit * 4}px`, // 16px
    moduIQxl: `${baseUnit * 5}px`, // 20px
    moduIQ2xl: `${baseUnit * 6}px`, // 24px
    moduIQ3xl: `${baseUnit * 7}px`, // 28px
    moduIQ4xl: `${baseUnit * 8}px`, // 32px
    moduIQ5xl: `${baseUnit * 9}px`, // 36px
    moduIQ6xl: `${baseUnit * 10}px`, // 40px
    moduIQ8xl: `${baseUnit * 12}px`, // 48px
    moduIQ10xl: `${baseUnit * 14}px`, // 56px
    moduIQ11xl: `${baseUnit * 15}px`, // 60px
    moduIQ12xl: `${baseUnit * 16}px`, // 64px
};

export default moduIQSpacing;