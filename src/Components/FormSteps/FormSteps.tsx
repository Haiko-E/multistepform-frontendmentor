import { NavLink, Flex, AspectRatio, Image } from '@mantine/core';
import { useStyles } from './styles.js';
import Step from '../Step/Step.js';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  step: number;
};

const FormSteps = ({ step }: Props) => {
  const matches = useMediaQuery('(min-width: 500px)');
  const { classes, cx } = useStyles();

  return (
    <AspectRatio
      w={matches ? '100%' : '100%'}
      ratio={matches ? 274 / 568 : 375 / 172}
      sx={matches ? { maxWidth: 274 } : { maxWidth: 400 }}
    >
      <Image
        src={
          matches
            ? '/public/assets/images/bg-sidebar-desktop.svg'
            : '/public/assets/images/bg-sidebar-mobile.svg'
        }
        alt='Background form steps'
      />

      <Flex
        justify='flex-start'
        mx='auto'
        direction={matches ? 'column' : 'row'}
        style={{ top: '30px', height: 'fit-content', width: 'fit-content' }}
      >
        <NavLink
          p={matches ? 'sm' : '0px'}
          icon={<Step selected={step === 1}>1</Step>}
          label='STEP 1'
          description='Your info'
          classNames={{
            root: classes.navlink,
            label: matches ? classes.label : classes.blank,
            description: matches ? classes.description : classes.blank,
          }}
        ></NavLink>
        <NavLink
          p={matches ? 'sm' : '0px'}
          icon={<Step selected={step === 2}>2</Step>}
          label='STEP 2'
          description='Select plan'
          classNames={{
            root: classes.navlink,
            label: matches ? classes.label : classes.blank,
            description: matches ? classes.description : classes.blank,
          }}
        ></NavLink>
        <NavLink
          p={matches ? 'sm' : '0px'}
          icon={<Step selected={step === 3}>3</Step>}
          label='STEP 3'
          description='Add-ons'
          classNames={{
            root: classes.navlink,
            label: matches ? classes.label : classes.blank,
            description: matches ? classes.description : classes.blank,
          }}
        ></NavLink>
        <NavLink
          p={matches ? 'sm' : '0px'}
          icon={<Step selected={step === 4}>4</Step>}
          label='STEP 4'
          description='Summary'
          classNames={{
            root: classes.navlink,
            label: matches ? classes.label : classes.blank,
            description: matches ? classes.description : classes.blank,
          }}
        ></NavLink>
      </Flex>
    </AspectRatio>
  );
};

export default FormSteps;
