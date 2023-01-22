import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  step: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.colors.customGrey[1]}`,
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    fontWeight: 600,
    color: theme.colors.customGrey[1],
  },

  active: {
    borderColor: theme.colors.customPurple[0],
    color: theme.black,
    backgroundColor: theme.colors.customPurple[0],
  },
}));
