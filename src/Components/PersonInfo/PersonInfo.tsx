import { Flex, Text, TextInput, Title, Button } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { Dispatch, SetStateAction } from 'react';
import Form from '../Form/Form';

type Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const PersonInfo = ({ step, setStep, form }: Props) => {
  const handleNext = () => {
    if (form.validate().hasErrors) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <Flex py='md' w='430px' h='500px' justify='space-around' direction='column'>
      <Title order={1}>Personal Info</Title>

      <Text
        mt='5px'
        component='p'
        sx={(theme) => ({
          color: theme.colors.customGrey[3],
        })}
      >
        please provide your name, email adress and phone number{' '}
      </Text>
      <Flex direction='column'>
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
      <Flex style={{ flex: 1 }} align='flex-end' justify='flex-end' pt='80px'>
        <Button onClick={handleNext} color='customBlue.0'>
          Next step
        </Button>
      </Flex>
    </Flex>
  );
};

export default PersonInfo;
