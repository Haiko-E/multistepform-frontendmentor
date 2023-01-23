import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider
    theme={{
      fontFamily: 'Ubuntu, sans serif',
      colorScheme: 'light',
      colors: {
        customBlue: ['#02295A'],
        customPurple: ['#BFE2FD', '#ADBEFF', '#473DFF'],
        customRed: ['#ED3548'],
        customGrey: ['#FAFBFF', '#F0F6FF', '#D6D9E6', '#9699AB'],
      },

      globalStyles: (theme) => ({
        body: {
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.customGrey[1],

          '#root': {
            overflow: 'auto',
          },
        },
      }),

      components: {
        Title: {
          defaultProps: (theme) => ({
            color: theme.colors.customBlue[0],
          }),
        },
        TextInput: {
          styles: (theme) => ({
            input: {
              '&:focus': {
                borderColor: theme.colors.customPurple[2],
              },

              fontWeight: 500,
              color: theme.colors.customBlue[0],
            },

            error: {
              fontWeight: 600,
            },

            label: {
              fontWeight: 500,
              color: theme.colors.customBlue[0],
            },
          }),
        },
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <App />
  </MantineProvider>
);
