/** @type { import('@storybook/react').Preview } */

import {ThemeProvider} from "styled-components"
import {GlobalStyle} from "../src/Styles/global_styles.js"
import {Theme} from "../src/Styles/theme.js"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;


export const decorators =[ 

  (Story) =>(
    <ThemeProvider theme ={Theme}>
      <Story/>
      <GlobalStyle/>
    </ThemeProvider>
)]