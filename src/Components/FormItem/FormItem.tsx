import { Flex, Title, Button, Text, Center } from '@mantine/core';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { OnSubmit } from '@mantine/form/lib/types';
import Form from '../Form/Form';

type Variant = 'first' | 'middle' | 'last';

type Props = {
  variant: Variant;
  header: string;
  description: string;
  buttonText?: string;
  children?: ReactNode;
  setStep: Dispatch<SetStateAction<number>>;
};

const FormItem = ({
  variant,
  buttonText = 'Next step',
  setStep,
  children,
  header,
  description,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep((prev) => prev + 1);
    }, 500);

    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 5000);
  }

  return (
    <Flex py='md' w='430px' h='500px' direction='column'>
      <Title order={1}>{header}</Title>
      <Text
        mt='5px'
        component='p'
        sx={(theme) => ({
          color: theme.colors.customGrey[3],
        })}
      >
        {description}
      </Text>
      {isLoading ? <Center h='100%'>Sending</Center> : children}
      <Flex
        style={{ flex: 1 }}
        align='flex-end'
        justify={variant !== 'first' ? 'space-between' : 'flex-end'}
        pt='80px'
      >
        {variant !== 'first' && (
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
        )}
        {variant === 'last' ? (
          <Button
            onClick={handleSubmit}
            color='customPurple.2'
            styles={{
              root: {
                '&:hover': {
                  opacity: '50%',
                },
              },
            }}
          >
            {'Confirm' || buttonText}
          </Button>
        ) : (
          <Button onClick={() => setStep((prev) => prev + 1)} color='customBlue.0'>
            {buttonText}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default FormItem;
