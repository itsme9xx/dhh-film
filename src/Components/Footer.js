import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className={`col-md-2 d-none d-md-block ${styles.logo}`}>
              <img src="https://phimmoichills.net/dev/images/logo.png" alt="" />
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Mới</h3>
              <ul>
                <li>
                  <a href="/details">Phim chiếu rạp</a>
                </li>
                <li>
                  <a href="/details">Phim lẻ</a>
                </li>
                <li>
                  <a href="/details">Phim bộ</a>
                </li>
                <li>
                  <a href="/details">Phim hành động</a>
                </li>
                <li>
                  <a href="/details">Phim viễn tưởng</a>
                </li>
                <li>
                  <a href="/details">Phim tâm lý</a>
                </li>
                <li>
                  <a href="/details">Phim hài hước</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Hay</h3>
              <ul>
                <li>
                  <a href="/details">Phim Mỹ</a>
                </li>
                <li>
                  <a href="/details">Phim Hàn Quốc</a>
                </li>
                <li>
                  <a href="/details">Phim Trung Quốc</a>
                </li>
                <li>
                  <a href="/details"> Phim Thái Lan</a>
                </li>
                <li>
                  <a href="/details">Phim Việt Nam</a>
                </li>
                <li>
                  <a href="/details">Phim Ma Kinh Dị</a>
                </li>
                <li>
                  <a href="/details">Phim Hoạt Hình</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Phim Hot</h3>
              <ul>
                <li>
                  <a href="/details">Phimmoi</a>
                </li>
                <li>
                  <a href="/details">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Trợ giúp</h3>
              <ul>
                <li>
                  <a href="/details">Trợ giúp</a>
                </li>
                <li>
                  <a href="/details">Liên hệ</a>
                </li>
                <li>
                  <a href="/details">Tin tức</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-2-5 col-3">
              <h3>Thông Tin</h3>
              <ul>
                <li>
                  <a href="/details">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="/details">Chính sách riêng tư</a>
                </li>
                <li>
                  <a href="/details">Khiếu nại bản quyển</a>
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
