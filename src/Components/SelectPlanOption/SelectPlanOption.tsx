import { Flex, Image, Text } from '@mantine/core';
import { useStyles } from './styles';
import { useMediaQuery } from '@mantine/hooks';
import { Form } from '../Form/Form';
import { UseFormReturnType } from '@mantine/form';

type Props = {
  logo: string;
  title: string;
  price: string;
  active: boolean;
  form: UseFormReturnType<Form>;
};

const SelectPlanOption = ({ form, active, logo, title, price }: Props) => {
  const { classes, cx } = useStyles();
  const matches = useMediaQuery('(min-width: 500px)', undefined, {
    getInitialValueInEffect: false,
  });

  return (
    <Flex
      w={matches ? '130px' : '100%'}
      h={matches ? '160px' : 'auto'}
      className={cx(classes.container, active && classes.active)}
      direction={matches ? 'column' : 'row'}
      align={matches ? 'flex-start' : 'center'}
    >
      <Image
        style={matches ? { flex: 1 } : { marginRight: '20px' }}
        width='40px'
        src={logo}
      ></Image>

      <Flex direction='column'>
        <Text color='customBlue.0' fw='600'>
          {title}
        </Text>
        <Text fz='sm' color='customGrey.3'>
          {price}
        </Text>
        {form.values.payment === 'yearly' && (
          <Text fw='500' lts='-0.5px' color={'customBlue.0'}>
            2 months free
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default SelectPlanOption;
