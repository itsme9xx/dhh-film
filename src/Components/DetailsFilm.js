import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "./Content";
import styles from "./DetailsFilm.module.css";
import MenuIcon from "@material-ui/icons/Menu";

function DetailsFilm(props) {
  const param = useParams();
  const [toogleVideo, settoogleVideo] = useState(false);
  const [hidden, setHidden] = useState(true);
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
            <span className={`${styles.playIcon} material-symbols-outlined`}>
              play_arrow
            </span>
            <div className={styles.text}>
              <p>{props.video.animeTitle}</p>
              <ul className={styles.listButton}>
                <Link to="">
                  <span className="material-symbols-outlined">live_tv</span>
                  <li className={styles.trailer}>Trailer</li>
                </Link>
                <Link to="">
                  <span className="material-symbols-outlined">play_arrow</span>
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
            <span> Phim hoạt hình</span>
          </li>
          <li>
            <label>Năm phát hành : </label>
            <span> 2009</span>
          </li>

          <li>
            <label>Đạo diễn : </label>
            <span> Ichika </span>
          </li>
          <li>
            <label>Quốc gia : </label>
            <span> Nhật Bản</span>
          </li>
          <li>
            <label>Điểm IMDB : </label>
            <span> 8.2</span>
          </li>
          <li>
            <label>Diễn viên : </label>
            <span> 奈良シカマル, うずまきナルト, マイト・ガ</span>
          </li>
        </div>
        <div className={styles.contentFilm}>
          <p className={styles.textFilm}>Nội dung phim : </p>
          <span>
            Câu chuyện xoay quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách
            khẳng định mình để được mọi người công nhận và nuôi ước mơ trở thành
            Hokage - người lãnh đạo Làng Lá. Cốt truyện được chia làm hai phần –
            phần đầu lấy bối cảnh vài năm trước tuổi thiếu niên (Naruto
            Dattebayo) và phần thứ hai là ở tuổi thiếu niên của Naruto (Naruto
            Shippuden). Series dựa trên hai Yomikiri của Kishimoto: Karakuri
            (1995), đã giúp Kishimoto đạt danh hiệu Hop Step Award hàng tháng
            của Shueisha ở những năm tiếp theo, và Naruto (1997).
          </span>
        </div>
      </div>
      <Content />
    </div>
  );
}
export default DetailsFilm;
