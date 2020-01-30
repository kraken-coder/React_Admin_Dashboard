import { primaryColor, secondaryColor, blackColor } from '../Utils/Colors';

const colors = [primaryColor(500), secondaryColor(700), blackColor(900)];

export const data1 = {
  labels: ['Apple', 'Mango', 'PineApple', 'orange', 'Kiwi'],
  datasets: [
    {
      label: 'Population',
      data: [110, 200, 300, 400, 500],
      backgroundColor: colors
    }
  ]
};
export const data2 = {
  labels: ['Apple', 'Mango', 'PineApple', 'orange', 'Kiwi'],
  datasets: [
    {
      label: 'adds',
      data: [1144, 2444, 3444, 4444, 5444],
      backgroundColor: colors
    }
  ]
};
