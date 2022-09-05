import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
