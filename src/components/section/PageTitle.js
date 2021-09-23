import styles from './PageTitle.module.css';

function PageTitle(props) {
  return (
    <section className={styles.pagetitle}>
      <h1 className={styles.pagetitle__text}>{props.title}</h1>
    </section>
  );
}

export default PageTitle;
