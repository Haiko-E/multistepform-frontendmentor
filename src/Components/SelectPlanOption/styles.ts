import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    border: `1.8px solid ${theme.colors.customGrey[2]}`,
    padding: theme.spacing.md,
    backgroundColor: '',
    borderRadius: '5px',

    '&:hover': {
      cursor: 'pointer',
      border: `1.8px solid ${theme.colors.customPurple[2]}`,
    },
  },

  active: {
    backgroundColor: theme.colors.customGrey[1],
    border: `1.8px solid ${theme.colors.customPurple[2]}`,
  },

  // image: {
  //   width: '30px',
  //   height: '30px',
  // },
}));
