import { useEffect, useState, CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListFilm from "./ListFilm";
import styles from "./TypeFilm.module.css";
import ScaleLoader from "react-spinners/ScaleLoader";

function TypeFilm(props) {
  var navigate = useNavigate();
  function allfilm() {
    props.viewAllFilm(props.video);
    navigate(`/allfilm`);
  }

  function viewListTagFilm(tagfilm) {
    props.viewAllTagFilm(tagfilm, props.id);
  }
  return (
    <div className={`container ${styles.heading}`}>
      <div className={styles.navHeading}>
        <Link to="/details" className={styles.title}>
          {props.title}
        </Link>
        <ul className={styles.subHeading}>
          {props.tag.map((x, index) => {
            return (
              <li
                onClick={() => {
                  viewListTagFilm(x);
                }}
                key={index}
              >
                <span>{x}</span>
              </li>
            );
          })}
          ;
        </ul>
      </div>

      <button
        onClick={() => {
          allfilm();
        }}
        className={styles.seeMore}
      >
        Xem tất cả
        <span className="material-symbols-outlined ">arrow_right</span>
      </button>
    </div>
  );
}

export default TypeFilm;
