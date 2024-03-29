import { useEffect, useState, CSSProperties } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./assets/Fontawesome_v6/css/all.css";
import AllFilm from "./Components/AllFilm";
import Content from "./Components/Content";
import DetailsFilm from "./Components/DetailsFilm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListFilm from "./Components/ListFilm";
import SearchFilm from "./Components/SearchFilm";
import TypeFilm from "./Components/TypeFlim";
import ScaleLoader from "react-spinners/ScaleLoader";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const [data, setData] = useState([
    {
      title: "PHIM THỊNH HÀNH",
      largeItem: true,
      tag: ["Action", "Adventure", "Comedy", "Dementia"],
      video: [],
      id: "phimthinhhanh",
    },
    {
      title: "PHIM LẺ",
      largeItem: true,
      tag: ["Demons", "Drama", "Dub", "Ecchi"],
      video: [],
      id: "phimle",
    },
    {
      title: "PHIM BỘ",
      largeItem: true,
      tag: ["2023", "2022", "2021", "2020"],
      video: [],
      id: "phimbo",
    },

    {
      title: "PHIM CHIẾU RẠP",
      largeItem: true,
      tag: ["Family", "Fantasy"],
      video: [],
      id: "phimchieurap",
    },
    {
      title: "PHIM PHÁT SÓNG",
      tag: [],
      largeItem: false,
      video: [],
      id: "phimphatsong",
    },
  ]);
  const navigate = useNavigate();
  const [detailFilm, setdetailFilm] = useState({});

  function Linkto(datadetail) {
    setdetailFilm(datadetail);
  }
  function viewAllFilm(alllistfilm) {
    setListFilm(alllistfilm);
  }
  function viewHeaderfilm(alllistfilm2) {
    const endpoint = isNaN(alllistfilm2)
      ? `genre/${alllistfilm2}`
      : "anime-movies";
    navigate(`/filter/${alllistfilm2}`);
    fetch(`https://anime-api-sandy.vercel.app/api/${endpoint.toLowerCase()}`)
      .then((response) => response.json())
      .then((animelist) => {
        endpoint === "anime-movies"
          ? setHeaderFilm(
              animelist.filter((item) => item.releasedDate === alllistfilm2)
            )
          : setHeaderFilm([...animelist]);
      });
  }
  const [headerfilm, setHeaderFilm] = useState([]);
  const [loading, setLoading] = useState({});
  function viewAllTagFilm(alltagfilm, index) {
    setLoading({ [data[index].id]: true });
    const endpoint = isNaN(alltagfilm) ? `genre/${alltagfilm}` : "anime-movies";
    fetch(`https://anime-api-sandy.vercel.app/api/${endpoint.toLowerCase()}`)
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[index];
        filmrecent.video =
          endpoint === "anime-movies"
            ? animelist.filter((item) => item.releasedDate === alltagfilm)
            : animelist;
        setData([...data]);
        setLoading({ [data[index].id]: false });
      });
  }
  const [toogleMenu, setToogleMenu] = useState(true);
  const [listfilm, setListFilm] = useState([]);

  useEffect(() => {
    function fetchdata(url, datafilm, length = undefined) {
      fetch(url)
        .then((response) => response.json())
        .then((animelist) => {
          const filmrecent = datafilm;
          filmrecent.video = length
            ? animelist.filter((x, index) => index < length)
            : animelist;
          setData([...data]);
        });
    }
    fetchdata("https://anime-api-sandy.vercel.app/api/new-season", data[1]);
    fetchdata("https://anime-api-sandy.vercel.app/api/popular", data[0]);
    fetchdata("https://anime-api-sandy.vercel.app/api/anime-movies", data[3]);
    fetchdata("https://anime-api-sandy.vercel.app/api/genre/action", data[2]);
    fetchdata("https://anime-api-sandy.vercel.app/api/top-airing", data[4], 10);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customContainer">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Header b={setToogleMenu} viewHeaderfilm={viewHeaderfilm} />
        <Routes>
          {toogleMenu && (
            <Route
              path="/"
              element={
                <>
                  <Content Linkto={Linkto} />
                  {data.map((x, index) => {
                    return (
                      <div key={index}>
                        <TypeFilm
                          idtarget={x.id}
                          id={index}
                          viewAllTagFilm={viewAllTagFilm}
                          viewAllFilm={viewAllFilm}
                          video={x.video}
                          title={x.title}
                          tag={x.tag}
                        />
                        <ListFilm
                          loading={loading[x.id]}
                          Linkto={Linkto}
                          video={x.video.filter((x, index) => index < 12)}
                          largeItem={x.largeItem}
                        />
                      </div>
                    );
                  })}
                </>
              }
            />
          )}
          <Route path="/allfilm/" element={<AllFilm video={listfilm} />} />
          <Route
            path="/filter/:keyword"
            element={<AllFilm video={headerfilm} />}
          />
          <Route
            path="/search/:keyword"
            element={<SearchFilm Linkto={Linkto} />}
          />
          <Route
            path="/details/:keyword"
            element={<DetailsFilm video={detailFilm} Linkto={Linkto} />}
          />
        </Routes>
        <Footer />
      </SkeletonTheme>
    </div>
  );
}

export default App;
