import { Anchor, Flex, Text, Divider } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Dispatch, SetStateAction } from 'react';
import { Form } from '../Form/Form';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const FinishItem = ({ form, setStep }: Props) => {
  const timing = form.values.payment[0].toUpperCase() + form.values.payment.slice(1);
  const plan =
    form.values.plan.name[0].toUpperCase() + form.values.plan.name.slice(1);
  const formValues = form.values;

  let total = formValues.addons.reduce(
    (prev, curr) => prev + curr.price,
    formValues.plan.price // <-- initial
  );

  console.log(form.values);

  return (
    <>
      <Flex
        direction='column'
        p='lg'
        bg='customGrey.1'
        style={{ borderRadius: '5px' }}
      >
        <Flex w='100%' align='center'>
          <Flex direction='column' style={{ flex: 1 }}>
            <Text fw={500} c='customBlue.0'>{`${plan}(${timing})`}</Text>
            <Anchor
              sx={(theme) => ({
                '&:hover': {
                  color: theme.colors.customPurple[2],
                },
              })}
              underline={true}
              component='button'
              c='customGrey.3'
              fz='sm'
              onClick={() => setStep(2)}
              align='left'
            >
              Change
            </Anchor>
          </Flex>

          <Text fw='500' c='customBlue.0'>
            {formValues.payment === 'montly'
              ? `$${formValues.plan.price}/mo`
              : `$${formValues.plan.price}/yr`}
          </Text>
        </Flex>
        <Divider mt='lg' size='sm' />
        <Flex direction='column'>
          {formValues.addons.map((addon, i) => {
            return (
              <Flex align='flex-end' key={i}>
                <Text
                  pt='20px'
                  fz='sm'
                  c='customGrey.3'
                  style={{ flex: 1 }}
                  component='span'
                >
                  {addon.name}
                </Text>
                <Text fz='sm' c='customBlue.0'>
                  {formValues.payment === 'montly'
                    ? `+$${addon.price}/mo`
                    : `+$${addon.price}/yr`}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex style={{ flex: 1 }} p='lg'>
        <Text fz='sm' c='customGrey.3' style={{ flex: 1 }} component='span'>
          {`Total (per ${formValues.payment === 'montly' ? 'month' : 'year'})`}
        </Text>
        <Text fw={500} fz='lg' c='customPurple.2'>
          {`${formValues.payment === 'montly' ? `$${total}/mo` : `$${total}/yr`}`}
        </Text>
      </Flex>
    </>
  );
};

export default FinishItem;
