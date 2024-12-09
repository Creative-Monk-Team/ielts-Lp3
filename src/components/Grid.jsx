import styles from "../styles/Grid.module.css";

let Grid = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
      <div className={styles.child}></div>

      <div className={styles.child1}></div>
      <div className={styles.child2}></div>

      <div className={styles.child3}></div>
      <div className={styles.child4}></div>
    </div>
  );
};

export default Grid;
