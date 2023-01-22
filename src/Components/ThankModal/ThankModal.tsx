import { Flex, Text, Image } from '@mantine/core';

const ThankModal = () => {
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      py='md'
      w='430px'
      h='500px'
    >
      <Image width={80} height={80} src='/public/assets/images/icon-thank-you.svg' />
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
