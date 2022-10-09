import { Link } from "react-router-dom";
import styles from "./FilmItem.module.css";

function FilmItem(props) {
  return (
    <div
      onClick={() => {
        props.Linkto(props.data);
      }}
      className={styles.slideBlock}
    >
      <Link to="/details">
        <span className={`${styles.playIcon} material-symbols-outlined`}>
          play_arrow
        </span>
        <img src={props.data.animeImg} alt="" />
        <h3 className={styles.title}>{props.data.animeTitle}</h3>
      </Link>
    </div>
  );
}

export default FilmItem;
