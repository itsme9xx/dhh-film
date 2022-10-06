import { useEffect } from "react";
import DetailsFilm from "./DetailsFilm";
import FilmItem from "./FilmItem";
import styles from "./ListFilm.module.css";
function ListFilm(props) {
  return (
    <div className="container">
      <div className={styles.grid}>
        {props.video.map((x, index) => {
          return (
            <div
              key={index}
              className={props.largeItem && index == 0 ? styles.largeItem : ""}
            >
              <FilmItem data={x} Linkto={props.Linkto} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListFilm;
