const tokens = {
  textDefault: "#222222",
  textCustom: "#00eebb",
  textDark: "#ffffff",
  backgroundDefault: "#ffffff",
  backgroundCustom: "#eeeeee",
  backgroundDark: "#333333",
};

export const defaultMui = {
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#555555",
    },
    background: {
      default: tokens.backgroundDefault,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.backgroundDefault,
          color: tokens.textDefault,
        },
      },
    },
  },
};

export const customMui = {
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#eeeeee",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.backgroundCustom,
          color: tokens.textCustom,
        },
      },
    },
  },
};

export const darkMui = {
  palette: {
    primary: {
      main: "#cccccc",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: tokens.backgroundDark,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.backgroundDark,
          color: tokens.textDark,
        },
      },
    },
  },
};
