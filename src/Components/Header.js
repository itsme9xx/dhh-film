import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllFilm from "./AllFilm";
import styles from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const datafilm = [
  {
    title: "PHIM THỊNH HÀNH",
    item: [],
    id: 0,
    link: "#phimthinhhanh",
  },
  {
    title: "PHIM LẺ",
    item: [],
    id: 1,
    link: "#phimle",
  },
  {
    title: "PHIM BỘ",
    item: [],
    id: 2,
    link: "#phimbo",
  },
  {
    title: "THỂ LOẠI",
    item: [
      {
        type: "Action",
        link: "/",
      },
      {
        type: "Adventure",
        link: "/",
      },
      {
        type: "Cars",
        link: "/",
      },
      {
        type: "Comedy",
        link: "/",
      },
      {
        type: "Crime",
        link: "/",
      },
      {
        type: "Dementia",
        link: "/",
      },
      {
        type: "Demons",
        link: "/",
      },
      {
        type: "Drama",
        link: "/",
      },
      {
        type: "Dub",
        link: "/",
      },
      {
        type: "Ecchi",
        link: "/",
      },
      {
        type: "Family",
        link: "/",
      },
      {
        type: "Fantasy",
        link: "/",
      },
      {
        type: "Game",
        link: "/",
      },
      {
        type: "Gourmet",
        link: "/",
      },
      {
        type: "Harem",
        link: "/",
      },
      {
        type: "Historical",
        link: "/",
      },
      {
        type: "Honor",
        link: "/",
      },
      {
        type: "Josei",
        link: "/",
      },
      {
        type: "Kids",
        link: "/",
      },
      {
        type: "Magic",
        link: "/",
      },
      {
        type: "Martial-arts",
        link: "/",
      },
      {
        type: "Mecha",
        link: "/",
      },
    ],
    column: 3,
  },
  {
    title: "NĂM PHÁT HÀNH",
    item: [
      {
        type: "2023",
        link: "/",
      },
      {
        type: "2022",
        link: "/",
      },
      {
        type: "2021",
        link: "/",
      },
      {
        type: "2020",
        link: "/",
      },
    ],
  },
  {
    title: "PHIM CHIẾU RẠP",
    item: [],
    id: 4,
    link: "#phimchieurap",
  },
  {
    title: "PHIM PHÁT SÓNG",
    item: [],
    id: 3,
    link: "#phimphatsong",
  },
  {
    title: "TOP PHIM",
    active: true,
    item: [],
  },
];
function Header(props) {
  const navigate = useNavigate();

  function allfilm(yy) {
    // console.log(yy);
    props.viewHeaderfilm(yy);
  }
  function search() {
    navigate(`/search/${find}`);
  }
  const [find, setFind] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.body.offsetWidth < 1200) {
        setToggleMenu(false);
      } else setToggleMenu(true);
    });
    return () => {
      window.removeEventListener("resize", setToggleMenu);
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
              <img src={require("../assets/img/logo.png")} alt="" />
            </Link>
          </div>
          {toggleMenu && (
            <ul className={styles.navbarItem}>
              {datafilm.map((x, index) => {
                return (
                  <li
                    key={index}
                    className={`${x.active && styles.active} ${
                      styles.showNavbar
                    }`}
                  >
                    <a href={x.link}>{x.title}</a>
                    {x.item.length > 0 && (
                      <ul className={`row ${styles.listNavbar}`}>
                        {x.item.map((y, index) => {
                          return (
                            <li
                              onClick={() => {
                                allfilm(y.type);
                              }}
                              key={index}
                              className={x.column === 3 ? "col-4" : "col-6"}
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
              value={find}
              className={styles.searchingBoxValue}
              type="text"
              placeholder="Tìm tên phim, diễn viên... "
              onChange={(e) => setFind(e.target.value)}
            />
            <button
              onClick={() => {
                search();
              }}
              className={styles.searchIcon}
            >
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
