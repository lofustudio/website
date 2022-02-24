import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const config: Partial<ThemeConfig> = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const styles = {
  global: props => ({
    body: {
      color: mode('#000000', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#000000')(props),
    },
  }),
};

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#111111')(props),
      },
    }),
  },

  Menu: {
    baseStyle: props => ({
      list: {
        bg: mode('white', '#111111')(props),
      },
    }),
  }
};

const customTheme = extendTheme({ config, styles, fonts, components });

export default customTheme