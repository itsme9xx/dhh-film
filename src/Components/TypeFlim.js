import styles from "./TypeFilm.module.css";

function TypeFilm(props) {
  return (
    <div className={`container ${styles.heading}`}>
      <div className={styles.navHeading}>
        <a href="/details" className={styles.title}>
          {props.title}
        </a>
        <ul className={styles.subHeading}>
          {props.tag.map((x) => {
            return (
              <li>
                <a href="/details">{x}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <a className={styles.seeMore} href="/details">
        Xem tất cả
        <span className="material-symbols-outlined ">arrow_right</span>
      </a>
    </div>
  );
}

export default TypeFilm;
