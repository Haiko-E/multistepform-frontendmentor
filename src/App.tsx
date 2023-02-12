import { useEffect } from 'react';
import Form from './Components/Form/Form';
import { useViewportSize } from '@mantine/hooks';

export default function App() {
  const { height } = useViewportSize();

  useEffect(() => {
    document.body.style.minHeight = `700px`;

    return () => {
      document.body.style.minHeight = '';
    };
  }, []);

  useEffect(() => {
    const windowHeight = +document.body.style.minHeight.slice(0, -2);

    if (height !== 0 && windowHeight > height) {
      const newHeight = 100 + windowHeight;
      document.body.style.minHeight = `${newHeight}px`;
    }

    return () => {
      document.body.style.minHeight = `700px`;
    };
  }, [height]);

  return <Form />;
}
