import { ChakraProvider, defaultSystem, Theme } from '@chakra-ui/react';
import type { Preview } from '@storybook/react-vite'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Theme colorPalette="green">
          <Story />
        </Theme>
      </ChakraProvider>
    )
  ]
};

export default preview;