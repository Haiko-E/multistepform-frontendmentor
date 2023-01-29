import { Flex, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { Dispatch, SetStateAction } from 'react';
import { Form } from '../Form/Form';

import FormItem from '../FormItem/FormItem';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const PersonInfo = ({ setStep, form }: Props) => {
  return (
    <FormItem
      form={form}
      variant='first'
      setStep={setStep}
      header='Personal Info'
      description='please provide your name, email adress and phone number'
    >
      <Flex direction='column' style={{ flex: 1 }}>
        <TextInput
          label='Name'
          name='name'
          placeholder='e.g. Stephen King'
          {...form.getInputProps('name')}
        ></TextInput>
        <TextInput
          required
          pt='sm'
          label='Email Address'
          name='Email'
          type='email'
          placeholder='e.g. StephenKing@example.com'
          {...form.getInputProps('email')}
        ></TextInput>
        <TextInput
          pt='sm'
          label='Phone Number'
          name='phone'
          placeholder='e.g. +1 2345 678901'
          required
          error='this field is required'
          {...form.getInputProps('phoneNumber')}
        ></TextInput>
      </Flex>
    </FormItem>
  );
};

export default PersonInfo;
