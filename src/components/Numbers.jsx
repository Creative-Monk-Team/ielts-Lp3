import styles from "../styles/Numbers.module.css";

let Numbers = () => {
  const stats = [
    {
      value: "3M+",
      label: "Users",
      description: "Annually visit our Platform",
    },
    { value: "20K+", label: "Candidates", description: "Trained" },
    { value: "10K+", label: "Students", description: "Placed in Abroad" },
    { value: "7K", label: "Candidates", description: "Helped in Migration" },
    { value: "7.5", label: "Band Score", description: "In IELTS Exam" },
    { value: "50", label: "Nationalities", description: "of trained students" },
  ];
  return (
    <>
      <div className={styles.numbersContainer} id="whyJoin">
        <div className={styles.innerNumbersContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h1 className={styles.value}>{stat.value}</h1>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Numbers;
