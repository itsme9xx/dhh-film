import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "./Content";
import styles from "./DetailsFilm.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import img from "../assets/img/videoexist.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DetailsFilm(props) {
  // console.log("detailfilm", props);
  const param = useParams();
  console.log(param);

  const [infoFilm, setInfoFilm] = useState({});
  let endpoint;
  if (props.video.animeId) {
    endpoint = `anime-details/${props.video.animeId}`;
  } else {
    // endpoint = "anime-movies";
    endpoint = `anime-details/${param.keyword}`;
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://anime-api-sandy.vercel.app/api/${endpoint.toLowerCase()}`)
      .then((res) => res.json())
      .then((result) => {
        setInfoFilm(result);
        setIsLoading(false);
      });
  }, [endpoint]);

  const [isLoading, setIsLoading] = useState(false);
  const [linkWatch, setLinkWatch] = useState({});
  const endpointlink = infoFilm.episodesList?.[0]?.episodeId;
  // console.log("test2", endpointlink);
  useEffect(() => {
    if (!endpointlink) return;
    fetch(
      `https://anime-api-sandy.vercel.app/api/vidcdn/watch/${endpointlink.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((result2) => {
        setLinkWatch(result2);
      });
  }, [endpointlink]);

  console.log("result", infoFilm);

  const [toogleVideo, settoogleVideo] = useState(false);
  const [hidden, setHidden] = useState(true);
  // console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.total} `}>
      <div className={styles.video}>
        {hidden && (
          <div>
            <img
              onClick={() => {
                settoogleVideo(!toogleVideo);
                setHidden(!hidden);
              }}
              className={styles.bigImg}
              src={props.video.animeImg || infoFilm.animeImg}
              style={{ background: "cover" }}
              alt=""
            />
            <img
              className={styles.smallImg}
              src={props.video.animeImg || infoFilm.animeImg}
              style={{ background: "cover" }}
              alt=""
            />
            <span className={styles.playIcon}>
              <i
                className="fa-sharp fa-solid fa-play"
                style={{ fontSize: 25 }}
              ></i>
            </span>
            <div className={styles.text}>
              <p>{props.video.animeTitle || infoFilm.animeTitle}</p>
              <ul className={styles.listButton}>
                <Link to="" className={styles.disabled}>
                  <span className={styles.icon}>
                    <i className="fa-regular fa-tv"></i>
                  </span>
                  <li className={styles.trailer}>Trailer</li>
                </Link>
                <Link
                  to=""
                  onClick={() => {
                    settoogleVideo(!toogleVideo);
                    setHidden(!hidden);
                  }}
                >
                  <span className={styles.icon}>
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </span>
                  <li className={styles.play}>Xem phim</li>
                </Link>
              </ul>
            </div>
          </div>
        )}
        {toogleVideo && linkWatch.Referer && infoFilm.status !== "Upcoming" && (
          <iframe
            className={styles.ytb}
            width="560"
            height="315"
            src={linkWatch.Referer}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {toogleVideo && infoFilm.status === "Upcoming" && (
          <div>
            <img src={img} className={styles.ytb} alt="" />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.actor}>
          <li>
            <label>Đang phát :</label>
            <span>
              {isLoading ? <Skeleton style={{ width: 200 }} /> : "HD VietSub"}
            </span>
          </li>
          <li>
            <label>Thể loại: </label>
            <span>
              {isLoading ? (
                <Skeleton style={{ width: 200 }} />
              ) : (
                infoFilm.genres || "Drama"
              )}
            </span>
          </li>
          <li>
            <label>Năm phát hành : </label>
            <span>
              {isLoading ? (
                <Skeleton style={{ width: 200 }} />
              ) : (
                infoFilm.releasedDate || "2000"
              )}
            </span>
          </li>
          <li>
            <label>Tình trạng : </label>
            <span>
              {isLoading ? (
                <Skeleton style={{ width: 200 }} />
              ) : (
                infoFilm.status || "N/A"
              )}
            </span>
          </li>
          <li>
            <label>Quốc gia : </label>
            <span>
              {isLoading ? <Skeleton style={{ width: 200 }} /> : "Nhật Bản"}
            </span>
          </li>
          <li>
            <label>Điểm IMDB : </label>
            <span>
              {isLoading ? <Skeleton style={{ width: 200 }} /> : "9.9"}
            </span>
          </li>
          <li>
            <label>Tên khác : </label>
            <span>
              {isLoading ? (
                <Skeleton style={{ width: 200 }} />
              ) : (
                infoFilm.otherNames || "Unknown"
              )}
            </span>
          </li>
        </div>
        <div className={styles.contentFilm}>
          <p className={styles.textFilm}>Nội dung phim : </p>
          <span>
            {isLoading ? (
              <Skeleton style={{ width: 200 }} />
            ) : (
              infoFilm.synopsis || "Phim hay"
            )}
          </span>
        </div>
      </div>
      <Content Linkto={props.Linkto} Special={props.video} />
    </div>
  );
}
export default DetailsFilm;
