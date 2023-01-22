import { NavLink, Flex, AspectRatio, Image } from '@mantine/core';
import { useStyles } from './styles.js';
import Step from '../Step/Step.js';

type Props = {
  step: number;
};

const FormSteps = ({ step }: Props) => {
  const { classes, cx } = useStyles();

  return (
    <AspectRatio w={240} ratio={274 / 568} sx={{ maxWidth: 274 }}>
      <Image
        src='/public/assets/images/bg-sidebar-desktop.svg'
        alt='Background form steps'
      />

      <Flex
        className={classes.container}
        justify='flex-start'
        mx='auto'
        direction='column'
        style={{ top: '30px', height: 'fit-content' }}
      >
        <NavLink
          icon={<Step selected={step === 1}>1</Step>}
          label='STEP 1'
          description='Your info'
          classNames={{
            root: classes.navlink,
            label: classes.label,
            description: classes.description,
          }}
        ></NavLink>
        <NavLink
          icon={<Step selected={step === 2}>2</Step>}
          label='STEP 2'
          description='Select plan'
          classNames={{
            root: classes.navlink,
            label: classes.label,
            description: classes.description,
          }}
        ></NavLink>
        <NavLink
          icon={<Step selected={step === 3}>3</Step>}
          label='STEP 3'
          description='Add-ons'
          classNames={{
            root: classes.navlink,
            label: classes.label,
            description: classes.description,
          }}
        ></NavLink>
        <NavLink
          icon={<Step selected={step === 4}>4</Step>}
          label='STEP 4'
          description='Summary'
          classNames={{
            root: classes.navlink,
            label: classes.label,
            description: classes.description,
          }}
        ></NavLink>
      </Flex>
    </AspectRatio>
  );
};

export default FormSteps;
