import { Flex, Header, Image, Text } from '@mantine/core';
import { useStyles } from './styles';

type Props = {
  logo: string;
  title: string;
  price: string;
  active: boolean;
};

const SelectPlanOption = ({ active, logo, title, price }: Props) => {
  const { classes, cx } = useStyles();

  return (
    <Flex
      w='130px'
      h='160px'
      className={cx(classes.container, active && classes.active)}
      direction='column'
    >
      <Image style={{ flex: 1 }} width='40px' src={logo}></Image>
      <Text color='customBlue.0' fw='500'>
        {title}
      </Text>
      <Text fz='sm' color='customGrey.3'>
        {price}
      </Text>
    </Flex>
  );
};

export default SelectPlanOption;
