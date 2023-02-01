import { Flex, Title, Button, Text, Center } from '@mantine/core';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { UseFormReturnType } from '@mantine/form';
import { Form } from '../Form/Form';

type Props = {
  variant: 'first' | 'middle' | 'last';
  header: string;
  description: string;
  buttonText?: string;
  children?: ReactNode;
  setStep: Dispatch<SetStateAction<number>>;
  form: UseFormReturnType<Form>;
};

const FormItem = ({
  form,
  variant,
  buttonText = 'Next step',
  setStep,
  children,
  header,
  description,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const matches = useMediaQuery('(min-width: 500px)', undefined, {
    getInitialValueInEffect: false,
  });

  function handleClick() {
    if (form.validate().hasErrors) {
      return;
    }
    setStep((prev) => prev + 1);
  }

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
    <>
      <Flex
        style={
          matches
            ? {}
            : {
                position: 'absolute',
                top: '100px',
                left: '30px',
                right: '30px',
                borderRadius: '10px',
              }
        }
        bg={'customGrey.0'}
        py={matches ? 'md' : '30px'}
        px={matches ? '0px' : 'md'}
        w={matches ? '430px' : 'auto'}
        h={matches ? '500px' : 'auto'}
        justify='space-around'
        direction='column'
      >
        <Title fz={matches ? '36px' : '30px'} order={1}>
          {header}
        </Title>
        <Text
          fz={matches ? 'md' : 'sm'}
          mt='5px'
          component='p'
          sx={(theme) => ({
            color: theme.colors.customGrey[3],
          })}
        >
          {description}
        </Text>
        {isLoading ? <Center h='100%'>Sending</Center> : children}
      </Flex>
      <Flex
        style={
          matches
            ? { flex: 1 }
            : {
                padding: '20px',
                backgroundColor: 'white',
                position: 'fixed',
                bottom: '0px',
                left: '0px',
                right: '0px',
              }
        }
        align='flex-end'
        justify={variant !== 'first' ? 'space-between' : 'flex-end'}
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
          <Button onClick={handleClick} color='customBlue.0'>
            {buttonText}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default FormItem;
