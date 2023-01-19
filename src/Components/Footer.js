import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import MenuIcon from "@material-ui/icons/Menu";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className={styles.pageUp}>
            <a href="#">
              {/* <span className="material-symbols-outlined">expand_less</span> */}
              <span className="material-symbols-outlined"></span>
            </a>
          </div>
          <div className="row">
            <div className={`col-md-2 d-none d-md-block ${styles.logo}`}>
              <img src="https://phimmoichills.net/dev/images/logo.png" alt="" />
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Mới</h3>
              <ul>
                <li>
                  <Link to="/details">Phim chiếu rạp</Link>
                </li>
                <li>
                  <Link to="/details">Phim lẻ</Link>
                </li>
                <li>
                  <Link to="/details">Phim bộ</Link>
                </li>
                <li>
                  <Link to="/details">Phim hành động</Link>
                </li>
                <li>
                  <Link to="/details">Phim viễn tưởng</Link>
                </li>
                <li>
                  <Link to="/details">Phim tâm lý</Link>
                </li>
                <li>
                  <Link to="/details">Phim hài hước</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Hay</h3>
              <ul>
                <li>
                  <Link to="/details">Phim Mỹ</Link>
                </li>
                <li>
                  <Link to="/details">Phim Hàn Quốc</Link>
                </li>
                <li>
                  <Link to="/details">Phim Trung Quốc</Link>
                </li>
                <li>
                  <Link to="/details"> Phim Thái Lan</Link>
                </li>
                <li>
                  <Link to="/details">Phim Việt Nam</Link>
                </li>
                <li>
                  <Link to="/details">Phim Ma Kinh Dị</Link>
                </li>
                <li>
                  <Link to="/details">Phim Hoạt Hình</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Hot</h3>
              <ul>
                <li>
                  <Link to="/details">Phimmoi</Link>
                </li>
                <li>
                  <Link to="/details">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Trợ giúp</h3>
              <ul>
                <li>
                  <Link to="/details">Trợ giúp</Link>
                </li>
                <li>
                  <Link to="/details">Liên hệ</Link>
                </li>
                <li>
                  <Link to="/details">Tin tức</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Thông Tin</h3>
              <ul>
                <li>
                  <Link to="/details">Điều khoản sử dụng</Link>
                </li>
                <li>
                  <Link to="/details">Chính sách riêng tư</Link>
                </li>
                <li>
                  <Link to="/details">Khiếu nại bản quyển</Link>
                </li>
                <p className={styles.actor}>Designed by HoangHai</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
