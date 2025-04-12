// src/tokens/colors.js
var moduIQColors = {
  moduIQDefault: {
    noBackground: "transparent",
    moduIQBody: "#000812",
    moduIQWhite: "#FFFFFF",
    moduIQBlack: "#000000"
  },
  moduIQPrimary: {
    50: "#f1f1ff",
    100: "#e6e5ff",
    200: "#cfcfff",
    300: "#aca8ff",
    400: "#8477ff",
    500: "#5d40ff",
    600: "#4a1aff",
    700: "#3606f1",
    800: "#2f06d1",
    900: "#2907ab"
  },
  moduIQSecondary: {
    50: "#fdffe7",
    100: "#f9ffc1",
    200: "#f7ff86",
    300: "#fbff41",
    400: "#fff90d",
    500: "#feea00",
    600: "#d1ae00",
    700: "#a67e02",
    800: "#89620a",
    900: "#74500f"
  },
  moduIQTertiary: {
    50: "#ecfdf3",
    100: "#d1fae1",
    200: "#a8f2c8",
    300: "#6fe6ab",
    400: "#36d188",
    500: "#12b76f",
    600: "#07945a",
    700: "#05774a",
    800: "#075d3c",
    900: "#074d34"
  },
  moduIQNeutral: {
    10: "#FAFAFA",
    20: "#F5F5F6",
    30: "#EBEBEC",
    40: "#DEDFE0",
    50: "#BFC1C4",
    60: "#B0B2B6",
    70: "#A3A6AA",
    80: "#94979B",
    90: "#85888D",
    100: "#757A7F",
    200: "#666B71",
    300: "#575C63",
    400: "#4A5057",
    500: "#3B4149",
    600: "#2E343D",
    700: "#1C232C",
    800: "#0D141E",
    900: "#000812"
  },
  moduIQStatus: {
    Success: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20"
    },
    Error: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C"
    },
    Warning: {
      50: "#FFF3E0",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100"
    }
  }
};

// src/tokens/spacing.js
var baseUnit = 4;
var moduIQSpacing = {
  moduIQBase: `${baseUnit}px`,
  // 4px
  moduIQNone: `0`,
  // 0px
  moduIQ2xs: `${baseUnit * 0.5}px`,
  // 2px
  moduIQxs: `${baseUnit}px`,
  // 4px
  moduIQsm: `${baseUnit * 2}px`,
  // 8px
  moduIQmd: `${baseUnit * 3}px`,
  // 12px
  moduIQlg: `${baseUnit * 4}px`,
  // 16px
  moduIQxl: `${baseUnit * 5}px`,
  // 20px
  moduIQ2xl: `${baseUnit * 6}px`,
  // 24px
  moduIQ3xl: `${baseUnit * 7}px`,
  // 28px
  moduIQ4xl: `${baseUnit * 8}px`,
  // 32px
  moduIQ5xl: `${baseUnit * 9}px`,
  // 36px
  moduIQ6xl: `${baseUnit * 10}px`,
  // 40px
  moduIQ8xl: `${baseUnit * 12}px`,
  // 48px
  moduIQ10xl: `${baseUnit * 14}px`,
  // 56px
  moduIQ11xl: `${baseUnit * 15}px`,
  // 60px
  moduIQ12xl: `${baseUnit * 16}px`
  // 64px
};

// src/tokens/typography.js
var moduIQTypography = {
  fontFamily: {
    primary: "Urbanist"
  },
  moduIQHeading: {
    h1: {
      moduIQSmall: {
        regular: { fontSize: "32px" },
        bold: { fontSize: "32px" }
      },
      moduIQXSmall: {
        regular: { fontSize: "40px" },
        bold: { fontSize: "40px" }
      },
      moduIQBase: {
        regular: { fontSize: "48px" },
        bold: { fontSize: "48px" }
      },
      moduIQLarge: {
        regular: { fontSize: "56px" },
        bold: { fontSize: "56px" }
      }
    },
    h2: {
      moduIQSmall: {
        regular: { fontSize: "24px" },
        bold: { fontSize: "24px" }
      },
      moduIQXSmall: {
        regular: { fontSize: "32px" },
        bold: { fontSize: "32px" }
      },
      moduIQBase: {
        regular: { fontSize: "40px" },
        bold: { fontSize: "40px" }
      },
      moduIQLarge: {
        regular: { fontSize: "48px" },
        bold: { fontSize: "48px" }
      }
    }
  },
  moduIQBody: {
    moduIQTiny: {
      light: { fontSize: "12px" },
      regular: { fontSize: "12px" },
      bold: { fontSize: "12px" }
    },
    moduIQSmall: {
      light: { fontSize: "14px" },
      regular: { fontSize: "14px" },
      bold: { fontSize: "14px" }
    },
    moduIQXSmall: {
      light: { fontSize: "16px" },
      regular: { fontSize: "16px" },
      bold: { fontSize: "16px" }
    },
    moduIQBase: {
      light: { fontSize: "18px" },
      regular: { fontSize: "18px" },
      bold: { fontSize: "18px" }
    },
    moduIQLarge: {
      light: { fontSize: "20px" },
      regular: { fontSize: "20px" },
      bold: { fontSize: "20px" }
    },
    moduIQXLarge: {
      light: { fontSize: "24px" },
      regular: { fontSize: "24px" },
      bold: { fontSize: "24px" }
    }
  },
  moduIQFontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
    black: "900"
  },
  moduIQLineHeight: {
    moduIQXSmall: "16px",
    moduIQSmall: "20px",
    moduIQBase: "24px",
    moduIQLarge: "28px",
    moduIQXLarge: "32px"
  },
  moduIQLineSpacing: {
    moduIQHeading: "32px",
    moduIQBody: {
      moduIQTiny: "16px",
      moduIQXSmall: "20px",
      moduIQSmall: "24px",
      moduIQBase: "28px",
      moduIQLarge: "32px",
      moduIQXLarge: "36px"
    }
  }
};

// src/tokens/shadows.js
var moduIQShadows = {
  moduIQNone: "0",
  moduIQXSmall: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  moduIQSmall: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
  moduIQMedium: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
  moduIQLarge: "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
  moduIQXLarge: "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
  moduIQ2XLarge: "0px 25px 50px rgba(0, 0, 0, 0.25)",
  moduIQInner: "inset 0px 2px 4px rgba(0, 0, 0, 0.06)",
  moduIQOutline: "0px 0px 0px 3px rgba(66, 153, 225, 0.6)",
  moduIQElevated: "0px 35px 50px rgba(0, 0, 0, 0.2)"
};

// src/theme.js
var theme = {
  colors: moduIQColors,
  spacing: moduIQSpacing,
  typography: moduIQTypography,
  shadows: moduIQShadows
};

export { theme };
//# sourceMappingURL=theme.mjs.map
//# sourceMappingURL=theme.mjs.map