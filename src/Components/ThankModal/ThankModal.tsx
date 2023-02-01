import { Flex, Text, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ThankModal = () => {
  const matches = useMediaQuery('(min-width: 500px)', undefined, {
    getInitialValueInEffect: false,
  });
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      bg={'customGrey.0'}
      py={matches ? 'md' : '30px'}
      px={matches ? '0px' : 'md'}
      w={matches ? '430px' : 'auto'}
      h={matches ? '500px' : 'auto'}
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
    >
      <Image width={80} height={80} src='/assets/images/icon-thank-you.svg' />
      <Text mb='0' c='customBlue.0' fz='30px' component='h1'>
        Thank you!
      </Text>
      <Text align='center' component='p' c='customGrey.3'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text>
    </Flex>
  );
};

export default ThankModal;
