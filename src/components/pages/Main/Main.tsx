import { FC, useState } from 'react';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { Wrapper } from '../../Wrapper/Wrapper';
import styles from './Main.module.scss';

export const Main: FC = () => {
  const [random, setRandom] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const genrateRandomNumber = (min: number, max: number) => {
    if (max > min) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      alert('Please enter correct values');
      return 0;
    }
  };

  return (
    <Wrapper>
      <div className={styles.result}>Random number: {random}</div>
      <section className={styles.values}>
        <Input onChange={(e) => setMin(Number(e.target.value))} text={'Min:'} />
        <Input onChange={(e) => setMax(Number(e.target.value))} text={'Max:'} />
      </section>
      <Button
        onClick={() => {
          setRandom(genrateRandomNumber(min, max));
        }}
      >
        Get random value
      </Button>
    </Wrapper>
  );
};
