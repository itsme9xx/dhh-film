import FilmItem from "./FilmItem";
import styles from "./ListFilm.module.css";
import { useEffect, useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
function ListFilm(props) {
  const override = {
    display: "block",
    position: "absolute",
    top: "1%",
    left: "50%",
  };

  return (
    <div className="container">
      <div className={styles.grid}>
        {props.video.map((x, index) => {
          return (
            <div
              key={index}
              className={props.largeItem && index === 0 ? styles.largeItem : ""}
            >
              <FilmItem data={x} Linkto={props.Linkto} />
            </div>
          );
        })}
        {props.loading && (
          <div className={styles.modal}>
            <ScaleLoader
              color="#36d7b7"
              height={35}
              cssOverride={override}
              loading={props.loading}
              margin={2}
              speedMultiplier={1}
              width={4}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListFilm;
