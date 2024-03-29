import { useHistory, useLocation } from 'react-router-dom';
import { majors } from '../../data/majors';
import styles from './Result.module.scss';

const Result: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const student = location.state;
  const majorID: any = String(student).substring(0, 3);
  const yearOfEntry: any = String(student).substring(3, 5);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.result}>
      <div className={styles.card}>
        <div className={styles.picture}>
          <img
            src={`https://akademik.unikom.ac.id/foto/${student}.jpg`}
            alt={`${student}`}
          />
        </div>
        <div className={styles.caption}>
          <h1 className={styles.nim}>#{student}</h1>
          <div className={styles.meta}>
            <div>
              <div className={styles.label}>major</div>
              <div className={styles.info}>{majors[majorID].name}</div>
            </div>
            <div>
              <div className={styles.label}>year of entry</div>
              <div className={styles.info}>{`20${yearOfEntry}`}</div>
            </div>
          </div>
        </div>
        <button onClick={handleClick} className={styles.button}>
          <svg
            className={styles.backIcon}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
          back
        </button>
      </div>
    </div>
  );
};

export default Result;
