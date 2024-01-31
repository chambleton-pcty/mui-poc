export const defaultJoy = {
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: "#2DA44E",
          solidHoverBg: "#2C974B",
          solidActiveBg: "#298E46",
        },
        neutral: {
          outlinedBg: "#F6F8FA",
          outlinedHoverBg: "#F3F4F6",
          outlinedActiveBg: "rgba(238, 239, 242, 1)",
          outlinedBorder: "rgba(27, 31, 36, 0.15)",
        },
        focusVisible: "rgba(3, 102, 214, 0.3)",
      },
    },
  },
  focus: {
    default: {
      outlineWidth: "3px",
    },
  },
  fontFamily: {
    body: "SF Pro Text, var(--gh-fontFamily-fallback)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "6px",
          boxShadow: "0 1px 0 0 rgba(27, 31, 35, 0.04)",
          transition: "80ms cubic-bezier(0.33, 1, 0.68, 1)",
          transitionProperty: "color,background-color,box-shadow,border-color",
          ...(ownerState.size === "md" && {
            fontWeight: 600,
            minHeight: "32px",
            fontSize: "14px",
            "--Button-paddingInline": "1rem",
          }),
          ...(ownerState.color === "success" &&
            ownerState.variant === "solid" && {
              "--gh-palette-focusVisible": "rgba(46, 164, 79, 0.4)",
              border: "1px solid rgba(27, 31, 36, 0.15)",
              "&:active": {
                boxShadow: "inset 0px 1px 0px rgba(20, 70, 32, 0.2)",
              },
            }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              "&:active": {
                boxShadow: "none",
              },
            }),
        }),
      },
    },
  },
};

export const customJoy = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#228be6",
          solidHoverBg: "#1c7ed6",
          solidActiveBg: undefined,
          softColor: "#228be6",
          softBg: "rgba(231, 245, 255, 1)",
          softHoverBg: "rgba(208, 235, 255, 0.65)",
          softActiveBg: undefined,
          outlinedColor: "#228be6",
          outlinedBorder: "#228be6",
          outlinedHoverBg: "rgba(231, 245, 255, 0.35)",
          outlinedHoverBorder: undefined,
          outlinedActiveBg: undefined,
        },
      },
    },
  },
  fontFamily: {
    body: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
  focus: {
    default: {
      outlineWidth: "2px",
      outlineOffset: "2px",
      outlineColor: "#339af0",
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          transition: "initial",
          borderRadius: "4px",
          fontWeight: 600,
          ...(ownerState.size === "md" && {
            minHeight: "36px",
            fontSize: "14px",
            paddingInline: "18px",
          }),
          "&:active": {
            transform: "translateY(1px)",
          },
        }),
      },
    },
  },
};
