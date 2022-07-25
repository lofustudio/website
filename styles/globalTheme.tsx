import { ComponentStyleConfig, GlobalStyle, SystemStyleObject, theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: Partial<ThemeConfig> = {
    useSystemColorMode: true,
    initialColorMode: "dark",
};

const fluidType = (minFont: number, maxFont: number) => {
    let XX = 768 / 100;
    let YY = (100 * (maxFont - minFont)) / (1920 - 768);
    let ZZ = minFont / 16;
    return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const colors = {
    "heading": "#FFFFFF",
    "headingSecondary": "#8F9094"
}

const styles = {
    global: (props: typeof GlobalStyle) => ({
        body: {
            color: mode("#000000", "#F5F5F7")(props),
            bg: mode("#F5F5F7", "#000000")(props),
        },

        "::-webkit-scrollbar": {
            width: "8px",
            background: mode("#F5F5F7", "#000000")(props),
        },
        "::-webkit-scrollbar-thumb": {
            background: mode("#000000", "#F5F5F7")(props),
            borderadius: "8px",
        },
    }),
};

const components = {
    Drawer: {
        baseStyle: (props: any) => ({
            dialog: {
                bg: mode("#F5F5F7", "#101212")(props),
            },
        }),
    },

    Menu: {
        baseStyle: (props: any) => ({
            list: {
                bg: mode("#F5F5F7", "#101212")(props),
            },
        }),
    },

    Modal: {
        baseStyle: (props: any) => ({
            dialog: {
                bg: mode("#F5F5F7", "#101212")(props),
            },
        }),
    },

    Popover: {
        baseStyle: (props: any) => ({
            content: {
                bg: mode("#F5F5F7", "#101212")(props),
            },
        }),
    },
};
``;
const fonts = {
    body: `Rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const overrides = {
    ...chakraTheme,
    styles,
    config,
    fonts,
    colors,
    components,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
    },
    fontSizes: {
        display: fluidType(144, 288),
        display2: fluidType(80, 144),
        display3: fluidType(24, 36),
    },
};

const customTheme = extendTheme(overrides);

export default customTheme;