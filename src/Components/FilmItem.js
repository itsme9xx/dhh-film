import styles from "./FilmItem.module.css";
import suggestFilmImg from "../assets/img/onepiece.jpg";

function FilmItem(props) {
  return (
    <div className={styles.slideBlock}>
      <a href="/details">
        <span className={`${styles.playIcon} material-symbols-outlined`}>
          play_arrow
        </span>
        <img src={props.data.animeImg} alt="" />
        <h3 className={styles.title}>{props.data.animeTitle}</h3>
      </a>
    </div>
  );
}

export default FilmItem;
