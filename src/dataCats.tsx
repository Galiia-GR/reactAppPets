import CatProps from './interface';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';

const catsData: CatProps[] = [
  {
    id: 1,
    name: 'cat',
    description: 'nice',
    price: 1,
    photoName: `${img1}`,
    soldOut: true,
  },
  {
    id: 2,
    name: 'cat',
    description: 'nice',
    price: 10,
    photoName: `${img2}`,
    soldOut: false,
  },
  {
    id: 3,
    name: 'cat',
    description: 'nice',
    price: 12,
    photoName: `${img3}`,
    soldOut: false,
  },
  {
    id: 4,
    name: 'cat',
    description: 'nice',
    price: 12,
    photoName: `${img4}`,
    soldOut: false,
  },
  {
    id: 5,
    name: 'cat',
    description: 'nice',
    price: 15,
    photoName: `${img5}`,
    soldOut: false,
  },
  {
    id: 6,
    name: 'cat',
    description: 'nice',
    price: 18,
    photoName: `${img6}`,
    soldOut: false,
  },
];
export default catsData;
