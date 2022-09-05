import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onClear?: () => void;
}

export const Input: FC<InputProps> = ({ text, onClear, value, type, ...props }) => {
  return (
    <label className={styles.wrapper}>
      {text}
      <input type="number" className={styles.input} value={value} {...props} />
    </label>
  );
};
