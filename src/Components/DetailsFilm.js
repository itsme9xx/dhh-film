import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "./Content";
import styles from "./DetailsFilm.module.css";
import MenuIcon from "@material-ui/icons/Menu";

function DetailsFilm(props) {
  console.log("detailfilm", props);
  const [infoFilm, setInfoFilm] = useState({});
  let endpoint;
  if (props.video.animeId) {
    endpoint = `anime-details/${props.video.animeId}`;
  } else {
    endpoint = "anime-movies";
  }

  useEffect(() => {
    fetch(`https://anime-api-sandy.vercel.app/api/${endpoint.toLowerCase()}`)
      .then((res) => res.json())
      .then((result) => setInfoFilm(result));
  }, [endpoint]);

  console.log("result", infoFilm);
  const param = useParams();
  const [toogleVideo, settoogleVideo] = useState(false);
  const [hidden, setHidden] = useState(true);
  // console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`container ${styles.total} `}>
      <div
        onClick={() => {
          settoogleVideo(!toogleVideo);
          setHidden(!hidden);
        }}
        className={styles.video}
      >
        {hidden && (
          <div>
            <img
              className={styles.bigImg}
              src={props.video.animeImg}
              style={{ background: "cover" }}
              alt=""
            />
            <img
              className={styles.smallImg}
              src={props.video.animeImg}
              style={{ background: "cover" }}
              alt=""
            />
            <span className={`${styles.playIcon} `}>
              <i
                className="fa-sharp fa-solid fa-play"
                style={{ fontSize: 25 }}
              ></i>
            </span>
            <div className={styles.text}>
              <p>{props.video.animeTitle}</p>
              <ul className={styles.listButton}>
                <Link to="">
                  <span className={styles.icon}>
                    <i className="fa-regular fa-tv"></i>
                  </span>
                  <li className={styles.trailer}>Trailer</li>
                </Link>
                <Link to="">
                  <span className={styles.icon}>
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </span>
                  <li className={styles.play}>Xem phim</li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {toogleVideo && (
          <iframe
            className={styles.ytb}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            // src="https://anihdplay.com/streaming.php?id=MjU2MTU=&title=Naruto+Episode+220&typesub=SUB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.actor}>
          <li>
            <label>Đang phát :</label>
            <span> HD VietSub</span>
          </li>
          <li>
            <label>Thể loại: </label>
            <span> {infoFilm.genres ? infoFilm.genres : "Drama"}</span>
          </li>
          <li>
            <label>Năm phát hành : </label>
            <span>
              {props.video.releasedDate ? props.video.releasedDate : "2000"}
            </span>
          </li>

          <li>
            <label>Tình trạng : </label>
            <span> {infoFilm.status ? infoFilm.status : "Đã hoàn thành"} </span>
          </li>
          <li>
            <label>Quốc gia : </label>
            <span> Nhật Bản</span>
          </li>
          <li>
            <label>Điểm IMDB : </label>
            <span> 9.9</span>
          </li>
          <li>
            <label>Tên khác : </label>
            <span>{infoFilm.otherNames ? infoFilm.otherNames : "Unknown"}</span>
          </li>
        </div>
        <div className={styles.contentFilm}>
          <p className={styles.textFilm}>Nội dung phim : </p>
          <span>{infoFilm.synopsis ? infoFilm.synopsis : `Phim hay`}</span>
        </div>
      </div>
      <Content Linkto={props.Linkto} Special={props.video} />
    </div>
  );
}
export default DetailsFilm;
