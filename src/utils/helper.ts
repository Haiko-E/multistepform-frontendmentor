import type { Adds } from '../Components/Form/Form';

// transform ObjectArray to stringArray, Mantine cant read array of objects as values.
export const arrayTransform = (array: Adds): string[] => {
  let result: string[] = [];
  array.forEach((item) => {
    result.push(`${item.name}, ${item.price}`);
  });

  return result;
};

// other way arround so we have a nice structured form
export const arrayToObject = (array: string[]): Adds => {
  let result: { name: string; price: number }[] = [];
  array.map((item) => {
    const data = item.split(',');
    result.push({ name: data[0], price: parseInt(data[1]) });
  });

  return result;
};
