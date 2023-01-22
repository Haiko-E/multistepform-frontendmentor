import { Flex, Text, Checkbox } from '@mantine/core';

type Props = {
  header: string;
  description: string;
  price: number;
  value: string;
};

const AddonsItem = ({ value, header, description, price }: Props) => {
  return (
    <Flex w='100%' align='center'>
      <Checkbox color='customPurple.2' value={value} />
      <Flex style={{ flex: 1 }} pl='xl' direction='column'>
        <Text color='customBlue.0' fw='500'>
          {header}
        </Text>
        <Text fz='sm' color='customGrey.3'>
          {description}
        </Text>
      </Flex>
      <Text fz='sm' color='customPurple.2'>
        +${price}/mo
      </Text>
    </Flex>
  );
};

export default AddonsItem;
