import { Link, useNavigate } from "react-router-dom";
import styles from "./FilmItem.module.css";

function FilmItem(props) {
  const navigate = useNavigate();
  function goToDetail() {
    navigate(`/details/${props.data.animeId}`);
  }
  return (
    <div
      onClick={() => {
        props.Linkto(props.data);
        goToDetail();
      }}
      className={styles.slideBlock}
    >
      <span className={`${styles.playIcon} material-symbols-outlined`}>
        play_arrow
      </span>
      <img src={props.data.animeImg} alt="" />
      <h3 className={styles.title}>{props.data.animeTitle}</h3>
    </div>
  );
}

export default FilmItem;
