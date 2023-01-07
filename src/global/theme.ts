import { createTheme } from "@mui/material/styles";

export const THEME = {
  colors: {
    primary: "#f9216d",
    secondary: "#181b23",
    tertiary: "#1f2029",
    error: "#be1622",
    white: "#fff",
    textSecondary: "#b3b5c6",
  },
};

export const MuiTheme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  palette: {
    primary: {
      main: THEME.colors.primary,
    },
    secondary: {
      main: THEME.colors.secondary,
    },
    background: {
      default: THEME.colors.secondary,
      paper: THEME.colors.tertiary,
    },
    error: {
      main: THEME.colors.error,
    },
    text: {
      primary: THEME.colors.white,
      secondary: THEME.colors.textSecondary,
    },
  },
});
