import { createStitches } from "@stitches/react";

export const {
    keyframes,
    styled,
    getCssText,
    globalCss,
    createTheme,
} = createStitches({
    media: {
        xs: "(max-width: 359px)",
        sm: "(min-width: 360px)",
        md: "(min-width: 500px)",
        lg: "(min-width: 760px)",
        xl: "(min-width: 1020px)",
        xxl: "(min-width: 1240px)",
        xxxl: "(min-width: 1440px)",
        dark: "(prefers-color-scheme: dark)",
        light: "(prefers-color-scheme: light)"
    }
});

const globalColors = {
    // vendor colors
    youtube: "#DE2920",
    twitch: "#9147FB"
};

export const darkTheme = createTheme({
    colors: {
        ...globalColors,
        // dark theme colors
        primary: "#BB86FC",
        primaryVariant: "#3700B3",
        secondary: "#9ACD32",
        secondaryVariant: "#9ACD32",
        background: "#121212",
        surface01: "#2C2C2C",
        surface02: "#454545",
        surface03: "#5E5E5E",
        surface04: "#777777",
        surface05: "#919191",
        surface06: "#AAAAAA",
        surface07: "#C3C3C3",
        surface08: "#DCDCDC",
        error: "#CF6679",
        onPrimary: "#000000",
        onSecondary: "#000000",
        onBackground: "#FFFFFF",
        onSurface: "#FFFFFF",
        onError: "#000000",
        border: "#121212"
    },
    radii: {
        borderRadius: "20px"
    }
});

export const lightTheme = createTheme({
    colors: {
        ...globalColors,
        primary: "#6200EE",
        primaryVariant: "#3700B3",
        secondary: "#03DAC6",
        secondaryVariant: "#018786",
        background: "#FFFFFF",
        surface01: "#F7F7F7",
        surface02: "#EEEEEE",
        surface03: "#EAEAEA",
        surface04: "#E5E5E5",
        surface05: "#E3E3E3",
        surface06: "#E1E1E1",
        surface07: "#DFDFDF",
        surface08: "#DCDCDC",
        error: "#B00020",
        onPrimary: "#FFFFFF",
        onSecondary: "#000000",
        onBackground: "#000000",
        onSurface: "#000000",
        onError: "#FFFFFF",
        border: "#000000"
    },
    radii: {
        borderRadius: "20px"
    }
});

export const yahooGeocitiesTheme = createTheme({
    colors: {
        ...globalColors,
        primary: "#BB86FC",
        primaryVariant: "#3700B3",
        secondary: "#03DAC6",
        secondaryVariant: "#018786",
        background: "transparent",
        surface01: "rgba(44,44,44,0.6)",
        surface02: "rgba(69,69,69,0.6)",
        surface03: "rgba(94,94,94,0.6)",
        surface04: "rgba(119,119,119,0.6)",
        surface05: "rgba(145,145,145,0.6)",
        surface06: "rgba(170,170,170,0.6)",
        surface07: "rgba(195,195,195,0.6)",
        surface08: "rgba(220,220,220,0.6)",
        error: "#CF6679",
        onPrimary: "#000000",
        onSecondary: "#000000",
        onBackground: "#BB86FC",
        onSurface: "#BB86FC",
        onError: "#000000",
        border: "#000000"
    },
    radii: {
        borderRadius: "0"
    }
});

export const globalStyles = globalCss({
    "body": {
        margin: "0",
        padding: "0",
        fontFamily: "'Lato', sans-serif",
        visibility: "hidden",
        opacity: "0",
        "@dark": {
            backgroundColor: "#121212"
        }
    },
    "a:visited": {
        color: "$onSurface",
        textDecoration: "none"
    },
    "main": {
        background: "$background",
        minHeight: "calc(100vh - 101px)",
        [`&.${ yahooGeocitiesTheme }`]: {
            background: "url(/geocities.gif)",
            fontFamily: "'Times', 'Times New Roman', serif",
            cursor: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEUAKJL/oIAAAAAgICDMZjP/379mMwCggGDVWFgAZv//zJnMMzP/////ZjOBmhzTAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmAxMBGjJw/RHyAAAA4UlEQVQoz62QrQ7CMBRGryu8wcwM2AkSngPPG2CL6pIZECRNgASLROCKQ5A0UxhCOjGDaHbfhd5uMDqQfKo9OffrDwyGI2jTB0iuH3vY7yD5FMgYQyedhjCuIcyX8SOtw4QIW4S+8MDItJZy0c721vqM6ibfYHWeIJqifDnSnJCArhWWbszdg+TiQaqtMQ6oYtCAHBXNVHeM6iMQrSlo5kClIpW0ppIjdbIsV05XVOIHmCtwekXA34L5MrRTGSP3IEbrQLSA7cMDmGO09LaY8eYneC8uOS3axwrR+TnG4Z95AnLTdNDS3p3QAAAAAElFTkSuQmCC), auto"
        },
        [`&.${ yahooGeocitiesTheme } a:hover, &.${ yahooGeocitiesTheme } button:hover, &.${ yahooGeocitiesTheme } div[role='button']:hover`]: {
            cursor: "url(data:image/png;base64,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), auto"
        }
    }
});

export const DEFAULT_THEME_NAME = "Modern Light";
export const defaultTheme = lightTheme;

export const THEMES = {
    "Yahoo! Geocities": yahooGeocitiesTheme,
    "Modern Dark": darkTheme,
    [DEFAULT_THEME_NAME]: lightTheme
};

// Themes
// Yahoo! Geocities
// Modern Light (2022)
// Modern Dark (2022)