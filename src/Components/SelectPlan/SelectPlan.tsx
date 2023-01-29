import { Dispatch, SetStateAction, useState } from 'react';
import SelectPlanOption from '../SelectPlanOption/SelectPlanOption';
import { Flex, Text, Title, Button, Switch, Radio } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Form } from '../Form/Form';
import FormItem from '../FormItem/FormItem';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const radioStyles = {
  root: { width: '100%' },

  labelWrapper: { width: '100%' },

  body: { width: '100%' },

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
  const matches = useMediaQuery('(min-width: 500px)');

  // Handler when plan changes
  const onChangeHandler = (e: string) => {
    const data = e.split(',');

    form.setFieldValue('plan', { name: data[0], price: parseInt(data[1]) });
  };

  // Handler when switch changes between montly and yearly
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      form.setFieldValue('payment', 'montly');
      form.setFieldValue('plan', {
        ...form.values.plan,
        price:
          form.values.plan.price < 90
            ? form.values.plan.price
            : form.values.plan.price / 10,
      });
      if (form.values.addons) {
        const freshAddons = form.values.addons.map((addon) => {
          return addon.price >= 10
            ? { name: addon.name, price: addon.price / 10 }
            : { ...addon };
        });
        form.setFieldValue('addons', freshAddons);
      }
    }

    if (e.target.checked) {
      form.setFieldValue('payment', 'yearly');
      form.setFieldValue('plan', {
        ...form.values.plan,
        price: form.values.plan.price * 10,
      });
      if (form.values.addons) {
        const freshAddons = form.values.addons.map((addon) => {
          return addon.price < 10
            ? { name: addon.name, price: addon.price * 10 }
            : { ...addon };
        });
        form.setFieldValue('addons', freshAddons);
      }
    }
  };
  console.log(form.values);
  return (
    <FormItem
      form={form}
      variant='middle'
      setStep={setStep}
      header='Select your plan'
      description='You have the option for monthly or yearly billing'
    >
      <Radio.Group
        value={form.values.plan.name}
        onChange={onChangeHandler}
        styles={
          matches
            ? {
                root: {
                  '> div': {
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    gap: '0px',
                  },
                },
              }
            : {
                root: {
                  '> div': {
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    gap: '10px',
                    width: '100%',
                  },
                },
              }
        }
      >
        <Radio
          value={payment === 'montly' ? ['arcade', '9'] : ['arcade', '90']}
          label={
            <SelectPlanOption
              form={form}
              title='Arcade'
              price={payment === 'montly' ? '$9 p/m' : '$90 p/y'}
              logo='/assets/images/icon-arcade.svg'
              active={form.values.plan.name === 'arcade'}
            />
          }
          styles={radioStyles}
        />
        <Radio
          value={payment === 'montly' ? ['advanced', '12'] : ['advanced', '120']}
          label={
            <SelectPlanOption
              form={form}
              title='Advanced'
              price={payment === 'montly' ? '$12 p/m' : '$120 p/y'}
              logo='/assets/images/icon-advanced.svg'
              active={form.values.plan.name === 'advanced'}
            />
          }
          styles={radioStyles}
        />
        <Radio
          value={payment === 'montly' ? ['pro', '15'] : ['pro', '150']}
          label={
            <SelectPlanOption
              form={form}
              title='Pro'
              price={payment === 'montly' ? '$15 p/m' : '$150 p/y'}
              logo='/assets/images/icon-pro.svg'
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
        style={{ marginBottom: 'auto', borderRadius: '5px' }}
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
    </FormItem>
  );
};

export default SelectPlan;
