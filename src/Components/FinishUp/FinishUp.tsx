import React, { Dispatch, SetStateAction } from 'react';
import FormItem from '../FormItem/FormItem';
import { Form } from '../Form/Form';
import { UseFormReturnType } from '@mantine/form';
import FinishItem from '../FinishItem/FinishItem';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const FinishUp = ({ form, setStep }: Props) => {
  return (
    <FormItem
      header='Finish up'
      description='Double-check if everything is OK before confirming'
      variant='last'
      setStep={setStep}
    >
      <FinishItem setStep={setStep} form={form} />
    </FormItem>
  );
};

export default FinishUp;
