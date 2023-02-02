import { useEffect } from 'react';
import Form from './Components/Form/Form';

export default function App() {
  useEffect(() => {
    document.body.style.minHeight = `${window.innerHeight}px`;
    return () => {
      document.body.style.minHeight = '';
    };
  }, []);

  return <Form />;
}
