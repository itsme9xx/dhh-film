import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import DetailsFilm from "./DetailsFilm";
import styles from "./Header.module.css";

const datafilm = [
  {
    title: "PHIMMOI",
    item: [],
  },
  {
    title: "PHIM LẺ",
    item: [],
  },
  {
    title: "PHIM BỘ",
    item: [],
  },
  {
    title: "THỂ LOẠI",
    item: [
      {
        type: "Phim Hành Động",
        link: "/",
      },
      {
        type: "Phim Võ Thuật",
        link: "/",
      },
      {
        type: "Phim Tình Cảm",
        link: "/",
      },
      {
        type: "Phim Hoạt Hình",
        link: "/",
      },
      {
        type: "Phim Hài Hước",
        link: "/",
      },
      {
        type: "Phim Viễn Tưởng",
        link: "/",
      },
      {
        type: "Phim Cổ Trang",
        link: "/",
      },
      {
        type: "Phim Phiêu Lưu",
        link: "/",
      },
      {
        type: "Phim Tâm Lý",
        link: "/",
      },
      {
        type: "Phim Khoa Học",
        link: "/",
      },
      {
        type: "Phim Phim Hình Sự",
        link: "/",
      },
      {
        type: "Phim Ma - Kinh Dị",
        link: "/",
      },
      {
        type: "Phim Chiến Tranh",
        link: "/",
      },
      {
        type: "Phim Âm Nhạc",
        link: "/",
      },
      {
        type: "Phim Thể Thao",
        link: "/",
      },
      {
        type: "Phim Thần Thoại",
        link: "/",
      },
      {
        type: "Game show",
        link: "/",
      },
      {
        type: "Phim Truyền Hình",
        link: "/",
      },
      {
        type: "Phim Chiếu Rạp",
        link: "/",
      },
      {
        type: "Phim Anime",
        link: "/",
      },
      {
        type: "Phim Sắp Chiếu",
        link: "/",
      },
      {
        type: "Phim Thuyết Minh",
        link: "/",
      },
    ],
    column: 3,
  },
  {
    title: "QUỐC GIA",
    item: [
      {
        type: "Phim Trung Quốc",
        link: "/",
      },
      {
        type: "Phim Hàn Quốc",
        link: "/",
      },
      {
        type: "Phim Nhật Bản",
        link: "/",
      },
      {
        type: "Phim Âu Mỹ",
        link: "/",
      },
      {
        type: "Phim Thái Lan",
        link: "/",
      },
      {
        type: "Phim Đài Loan",
        link: "/",
      },
      {
        type: "Phim Tổng Hợp",
        link: "/",
      },
      {
        type: "Phim Hồng Kông",
        link: "/",
      },
      {
        type: "Phim Ấn Độ",
        link: "/",
      },
    ],
  },
  {
    title: "NĂM PHÁT HÀNH",
    item: [
      {
        type: "Phim 2022",
        link: "/",
      },
      {
        type: "Phim 2021",
        link: "/",
      },
      {
        type: "Phim 2020",
        link: "/",
      },
      {
        type: "Phim 2019",
        link: "/",
      },
      {
        type: "Phim 2018",
        link: "/",
      },
      {
        type: "Phim 2017",
        link: "/",
      },
      {
        type: "Phim 2016",
        link: "/",
      },
      {
        type: "Phim 2015",
        link: "/",
      },
      {
        type: "Phim 2014",
        link: "/",
      },
      {
        type: "Phim 2013",
        link: "/",
      },
      {
        type: "Phim 2012",
        link: "/",
      },
      {
        type: "Phim 2011",
        link: "/",
      },
      {
        type: "Phim 2010",
        link: "/",
      },
      {
        type: "Phim 2009",
        link: "/",
      },
      {
        type: "Phim 2008",
        link: "/",
      },
      {
        type: "Phim Trước 2008",
        link: "/",
      },
    ],
  },
  {
    title: "PHIM CHIẾU RẠP",
    item: [],
  },
  {
    title: "TRAILER",
    item: [],
  },
  {
    title: "TOP PHIM",
    active: true,
    item: [
      {
        type: "TOP IMDB",
        link: "/",
      },
      {
        type: "Phim Hot",
        link: "/",
      },
      {
        type: "Phim Netflix",
        link: "/",
      },
      {
        type: "Phim DC Comics",
        link: "/",
      },
      {
        type: "Phim Marvel",
        link: "/",
      },
      {
        type: "Phim HD",
        link: "/",
      },
    ],
  },
];
function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.body.offsetWidth < 1200) {
        setToggleMenu(false);
      } else setToggleMenu(true);
    });
    return () => {
      window.removeEventListener();
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={`container ${styles.navbar}`}>
          <div
            onClick={() => {
              setToggleMenu(!toggleMenu);
              props.b(toggleMenu);
            }}
            className={styles.menuMobile}
          >
            <span className={` material-symbols-outlined isMobi`}>menu</span>
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://phimmoichills.net/dev/images/logo.png" alt="" />
            </Link>
          </div>
          {toggleMenu && (
            <ul className={styles.navbarItem}>
              {datafilm.map((x, index) => {
                return (
                  <li
                    key={index}
                    className={`${x.active ? styles.active : ""} ${
                      styles.showNavbar
                    }`}
                  >
                    <Link>{x.title}</Link>
                    {x.item.length > 0 && (
                      <ul className={`row ${styles.listNavbar}`}>
                        {x.item.map((y, index) => {
                          return (
                            <li
                              key={index}
                              className={x.column == 3 ? "col-4" : "col-6"}
                            >
                              <Link className="sub-menu-link" to={y.link}>
                                {y.type}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          <div className={styles.searchingBox}>
            <input
              className={styles.searchingBoxValue}
              type="text"
              placeholder="Tìm tên phim, diễn viên... "
            />
            <button className={styles.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
