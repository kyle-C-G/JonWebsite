import styles from "./section.module.css";

function Expense(props) {
  return (
    <div
      className={`${styles.container} ${styles[props.position]}`}>

      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.mockupContainer}>
        <img
          className={styles.mockup_1}
          src={props.mockup_1}
        />
        <img
          className={styles.mockup_2}
          src={props.mockup_2}
        />
      </div>
        <img className={styles.background} src={props.background}/>
    </div>
  );
}

export default Expense;
