import { Checkbox, Flex } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Form } from '../Form/Form';
import { Dispatch, SetStateAction } from 'react';
import AddonsItem from '../AddonsItem/AddonsItem';
import FormItem from '../FormItem/FormItem';
import { arrayTransform, arrayToObject } from '../../utils/helper';
type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const Addons = ({ form, setStep }: Props) => {
  const payment = form.values.payment;
  const checkboxValues = arrayTransform(form.values.addons);

  const handleAddons = (e: string[]) => {
    form.setFieldValue('addons', arrayToObject(e));
  };

  return (
    <FormItem
      form={form}
      description='Add-ons help enhance your gaming experience'
      header='Pick Add-ons'
      variant='middle'
      setStep={setStep}
    >
      <Checkbox.Group
        styles={{
          root: { '>div': { flexDirection: 'column', alignItems: 'flex-start' } },
        }}
        style={{ flex: 1 }}
        value={checkboxValues}
        onChange={handleAddons}
      >
        <AddonsItem
          header='Online service'
          description='Acces to multiplayer games'
          price={payment === 'montly' ? 1 : 10}
          value={payment === 'montly' ? 'Online service, 1' : 'Online service, 10'}
        />
        <AddonsItem
          header='Larger storage'
          description='Extra 1TB cloud storage'
          price={payment === 'montly' ? 2 : 20}
          value={payment === 'montly' ? 'Larger storage, 2' : 'Larger storage, 20'}
        />
        <AddonsItem
          header='Customizable Profile'
          description='Custom theme on your profile'
          price={payment === 'montly' ? 2 : 20}
          value={payment === 'montly' ? 'Custom profile, 2' : 'Custom profile, 20'}
        />
      </Checkbox.Group>
    </FormItem>
  );
};

export default Addons;
