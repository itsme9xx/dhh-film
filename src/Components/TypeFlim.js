import { Link } from "react-router-dom";
import styles from "./TypeFilm.module.css";

function TypeFilm(props) {
  return (
    <div className={`container ${styles.heading}`}>
      <div className={styles.navHeading}>
        <Link to="/details" className={styles.title}>
          {props.title}
        </Link>
        <ul className={styles.subHeading}>
          {props.tag.map((x, index) => {
            return (
              <li key={index}>
                <Link to="/details">{x}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link className={styles.seeMore} to="/details">
        Xem tất cả
        <span className="material-symbols-outlined ">arrow_right</span>
      </Link>
    </div>
  );
}

export default TypeFilm;
