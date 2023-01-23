import { Flex, Center } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import FormSteps from '../FormSteps/FormSteps';
import PersonInfo from '../PersonInfo/PersonInfo';
import { useState } from 'react';
import SelectPlan from '../SelectPlan/SelectPlan';
import { z } from 'zod';
import Addons from '../Addons/Addons';
import FinishUp from '../FinishUp/FinishUp';
import ThankModal from '../ThankModal/ThankModal';

const regex = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// ZOD handles the requirements and error states on every field
const Plan = z.object({ name: z.string(), price: z.number() });
const Adds = z.array(z.object({ name: z.string(), price: z.number() }));

const Schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invallid email' }),
  phoneNumber: z.string().regex(regex, { message: 'invallid phone number' }),
  plan: Plan,
  addons: Adds,
  payment: z.string(),
});

// ZOD creating types to use around the form
export type Form = z.infer<typeof Schema>;
export type Plan = z.infer<typeof Plan>;
export type Adds = z.infer<typeof Adds>;

const Form = () => {
  const [step, setStep] = useState(1);

  // The form gets al the state updates and preserves the state
  const form = useForm<Form>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      plan: { name: 'arcade', price: 9 },
      payment: 'montly',
      addons: [],
    },

    validate: zodResolver(Schema),
  });

  return (
    <Flex
      align='center'
      justify='space-between'
      w='800px'
      bg='customGrey.0'
      p='md'
      style={{ overflow: 'auto', borderRadius: '10px' }}
    >
      <FormSteps step={step} />
      <form>
        {step === 1 && <PersonInfo form={form} step={step} setStep={setStep} />}
        {step === 2 && <SelectPlan form={form} step={step} setStep={setStep} />}
        {step === 3 && <Addons form={form} setStep={setStep} />}
        {step === 4 && <FinishUp form={form} setStep={setStep} />}
        {step === 5 && <ThankModal></ThankModal>}
        {step === 6 && (
          <Center w='430px' h='480px'>
            <pre>{JSON.stringify(form.values, undefined, 2)}</pre>
          </Center>
        )}
      </form>
    </Flex>
  );
};

export default Form;
