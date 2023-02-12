import { useEffect, useState } from 'react';
import Form from './Components/Form/Form';
import { useViewportSize } from '@mantine/hooks';

export default function App() {
  const [initialState, setInitialsState] = useState(0);
  const { height, width } = useViewportSize();

  useEffect(() => {
    document.body.style.minHeight = `${window.innerHeight}px`;
    setInitialsState(window.innerHeight);
    return () => {
      document.body.style.minHeight = '';
    };
  }, []);

  useEffect(() => {
    const windowHeight = +document.body.style.minHeight.slice(0, -2);

    if (height !== 0 && windowHeight > height) {
      const newHeight = windowHeight - height + windowHeight;
      document.body.style.minHeight = `${newHeight}px`;
    }

    return () => {
      document.body.style.minHeight = `${initialState}px`;
    };
  }, [height]);

  return <Form />;
}
