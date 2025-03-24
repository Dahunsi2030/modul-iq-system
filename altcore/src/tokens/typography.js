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