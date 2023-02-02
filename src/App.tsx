import Form from './Components/Form/Form';
import { useKeyboardOffset } from 'virtual-keyboard-offset';

export default function App() {
  const { keyBoardOffset, windowHeight } = useKeyboardOffset();
  console.log(keyBoardOffset);
  console.log(windowHeight);

  return <Form />;
}
