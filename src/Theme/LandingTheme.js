import { createTheme, colors } from "@mui/material";

export const LandingTheme = createTheme ({
    breakpoints: {
    values: {
            xs: 0,
            sm: 480,
            md: 900,
            lg: 1024,
            xl: 1536,
        },
    },
    palette: {
        type: 'light',
        primary: {
          	main: '#3d5a23',
          	dark: '#1e2b11',
          	light: 'rgba(216,235,199,0.5)',
        },
    },
    typography: {
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },

    spacing: 1,

});
