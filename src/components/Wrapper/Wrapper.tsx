import { FC, ReactNode } from 'react';
import styles from './Wrapper.module.scss';

export const UnloggedWrapper: FC<{ children: ReactNode | JSX.Element }> = ({ children }) => {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
};
