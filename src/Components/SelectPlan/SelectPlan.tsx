import { Dispatch, SetStateAction, useState } from 'react';
import SelectPlanOption from '../SelectPlanOption/SelectPlanOption';
import { Flex, Text, Title, Button, Switch, Radio } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import Form from '../Form/Form';

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const radioStyles = {
  inner: {
    display: 'none',
  },
  radio: {
    display: 'none',
  },
  label: {
    paddingLeft: '0px',
  },
};

const SelectPlan = ({ form, step, setStep }: Props) => {
  const payment = form.values.payment;

  // Handler when plan changes
  const onChangeHandler = (e: string) => {
    const data = e.split(',');

    form.setFieldValue('plan', { name: data[0], price: parseInt(data[1]) });
  };

  // Handler when switch changes between montly and yearly
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      form.setFieldValue('payment', 'montly');
    }

    if (e.target.checked) {
      form.setFieldValue('payment', 'yearly');
    }
  };

  return (
    <Flex py='md' w='430px' h='500px' direction='column'>
      <Title order={1}>Select your plan</Title>

      <Text
        mt='5px'
        component='p'
        sx={(theme) => ({
          color: theme.colors.customGrey[3],
        })}
      >
        You have the option for monthly or yearly billing
      </Text>
      {/* <Flex gap='sm' justify='space-between'> */}
      <Radio.Group
        value={form.values.plan.name}
        onChange={onChangeHandler}
        styles={{
          root: {
            '> div': {
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              gap: '0px',
            },
          },
        }}
      >
        <Radio
          value={['arcade', '9']}
          label={
            <SelectPlanOption
              title='Arcade'
              price='$9 p/m'
              logo='/public/assets/images/icon-arcade.svg'
              active={form.values.plan.name === 'arcade'}
            />
          }
          styles={radioStyles}
        />
        <Radio
          value={['advanced', '12']}
          label={
            <SelectPlanOption
              title='Advanced'
              price='$12 p/m'
              logo='/public/assets/images/icon-advanced.svg'
              active={form.values.plan.name === 'advanced'}
            />
          }
          styles={radioStyles}
        />
        <Radio
          value={['pro', '15']}
          label={
            <SelectPlanOption
              title='Pro'
              price='$15 p/m'
              logo='/public/assets/images/icon-pro.svg'
              active={form.values.plan.name === 'pro'}
            />
          }
          styles={radioStyles}
        />
      </Radio.Group>

      <Flex
        align='center'
        justify='center'
        mt='lg'
        p='xs'
        style={{ borderRadius: '5px' }}
        bg='customGrey.1'
      >
        <Text
          color={payment === 'montly' ? 'customBlue.0' : 'customGrey.3'}
          mr='sm'
          component='span'
        >
          Montly
        </Text>
        <Switch
          checked={payment === 'yearly'}
          onChange={handleSwitch}
          color='customBlue.0'
          display='flex'
          styles={(theme) => ({
            track: {
              border: `1px solid ${theme.colors.customBlue[0]}`,
              backgroundColor: theme.colors.customBlue[0],
            },
          })}
        />
        <Text
          color={payment !== 'montly' ? 'customBlue.0' : 'customGrey.3'}
          ml='sm'
          component='span'
        >
          Yearly
        </Text>
      </Flex>
      <Flex style={{ flex: 1 }} align='flex-end' justify='space-between' pt='80px'>
        <Button
          onClick={() => setStep((prev) => prev - 1)}
          styles={(theme) => ({
            root: {
              border: 'none',
              '&:hover': {
                color: theme.colors.customBlue[0],
              },
            },
          })}
          variant='outline'
          color='customGrey.3'
        >
          Go Back
        </Button>
        <Button onClick={() => setStep((prev) => prev + 1)} color='customBlue.0'>
          Next step
        </Button>
      </Flex>
    </Flex>
  );
};

export default SelectPlan;
