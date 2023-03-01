import ListFilm from "./ListFilm";
import styles from "./AllFilm.module.css";

function AllFilm(props) {
  // console.log(props);
  return (
    <div className={styles.allFilm}>
      <ListFilm video={props.video} />;
    </div>
  );
}

export default AllFilm;
