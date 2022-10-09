import ListFilm from "./ListFilm";
import styles from "./AllFilm.module.css";

function AllFilm(props) {
  return (
    <div className={styles.allFilm}>
      <ListFilm video={props.video} />;
    </div>
  );
}

export default AllFilm;
