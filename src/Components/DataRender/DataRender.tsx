import { Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Form } from '../Form/Form';
import { UseFormReturnType } from '@mantine/form';

type Props = {
  form: UseFormReturnType<Form>;
};

const DataRender = ({ form }: Props) => {
  const matches = useMediaQuery('(min-width: 500px)', undefined, {
    getInitialValueInEffect: false,
  });
  return (
    <Center
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
      fz={matches ? 'md' : 'xs'}
      bg={'customGrey.0'}
      py={matches ? 'md' : '30px'}
      px={matches ? '0px' : 'md'}
      w={matches ? '430px' : 'auto'}
      h={matches ? '500px' : 'auto'}
    >
      <pre>{JSON.stringify(form.values, undefined, 2)}</pre>
    </Center>
  );
};

export default DataRender;
