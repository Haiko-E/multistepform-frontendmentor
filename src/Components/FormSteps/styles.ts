import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  navlink: {
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  label: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 400,
    color: theme.colors.customGrey[3],
  },

  description: {
    lineHeight: '1.4',
    textTransform: 'uppercase',
    color: theme.colors.customGrey[1],
    fontSize: theme.fontSizes.md,
    letterSpacing: '1px',
  },

  blank: {
    display: 'none',
  },
}));
