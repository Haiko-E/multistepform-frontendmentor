import React, { useState } from 'react';
import { useStyles } from './style';

type Props = {
  children: string | JSX.Element;
  selected: boolean;
};

const Step = ({ selected = false, children }: Props) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.step, selected && classes.active)}>{children}</div>
  );
};

export default Step;
