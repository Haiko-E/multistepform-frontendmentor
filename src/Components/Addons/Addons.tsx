import { Checkbox } from '@mantine/core';
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
  const checkboxValues = arrayTransform(form.values.addons);

  const handleAddons = (e: string[]) => {
    form.setFieldValue('addons', arrayToObject(e));
  };

  return (
    <FormItem
      description='Add-ons help enhance your gaming experience'
      header='Pick Add-ons'
      variant='middle'
      setStep={setStep}
    >
      <Checkbox.Group
        styles={{
          root: { '>div': { flexDirection: 'column', alignItems: 'flex-start' } },
        }}
        value={checkboxValues}
        onChange={handleAddons}
      >
        <AddonsItem
          header='Online service'
          description='Acces to multiplayer games'
          price={1}
          value='Online service, 1'
        />
        <AddonsItem
          header='Larger storage'
          description='Extra 1TB cloud storage'
          price={2}
          value='Larger storage, 2'
        />
        <AddonsItem
          header='Customizable Profile'
          description='Custom theme on your profile'
          price={2}
          value='Custom profile, 2'
        />
      </Checkbox.Group>
    </FormItem>
  );
};

export default Addons;
