import { useEffect, useState, CSSProperties, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListFilm from "./ListFilm";
import styles from "./TypeFilm.module.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import MenuIcon from "@material-ui/icons/Menu";

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
    <div id={props.idtarget} className={`container ${styles.heading}`}>
      <div className={styles.navHeading}>
        <Link className={styles.title}>{props.title}</Link>
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
        <i
          class="fa-sharp fa-solid fa-caret-right"
          style={{
            marginLeft: 5,
            display: "flex",
            alignItems: "center",
            height: 20,
          }}
        ></i>
      </button>
    </div>
  );
}

export default TypeFilm;
