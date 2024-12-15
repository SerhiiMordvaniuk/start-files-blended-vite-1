import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <Icon className={styles.icon} />
      <span className={styles.counter}>{total}</span>
      <p className={styles.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
