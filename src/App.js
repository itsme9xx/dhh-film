import { useEffect, useState, CSSProperties } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllFilm from "./Components/AllFilm";
import Content from "./Components/Content";
import DetailsFilm from "./Components/DetailsFilm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListFilm from "./Components/ListFilm";
import SearchFilm from "./Components/SearchFilm";
import TypeFilm from "./Components/TypeFlim";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [data, setData] = useState([
    {
      title: "PHIM LẺ MỚI CẬP NHẬT",
      largeItem: true,
      tag: ["Action", "Adventure", "Comedy", "Dementia"],
      video: [],
      id: "phimle",
    },
    {
      title: "PHIM CHIẾU RẠP",
      largeItem: true,
      tag: ["2023", "2022", "2021", "2020"],
      video: [],
      id: "phimchieurap",
    },
    {
      title: "PHIM BỘ MỚI CẬP NHẬT",
      largeItem: true,
      tag: ["Demons", "Drama", "Dub", "Ecchi"],
      video: [],
      id: "phimbo",
    },
    {
      title: "PHIM THỊNH HÀNH",
      largeItem: true,
      tag: ["Family", "Fantasy"],
      video: [],
      id: "phimthinhhanh",
    },
    {
      title: "PHIM SẮP CHIẾU",
      tag: [],
      largeItem: false,
      video: [],
    },
  ]);
  const [detailFilm, setdetailFilm] = useState({});
  function Linkto(datadetail) {
    // console.log(datadetail);
    setdetailFilm(datadetail);
  }
  function viewAllFilm(alllistfilm) {
    setListFilm(alllistfilm);
  }
  const [loading, setLoading] = useState({});
  function viewAllTagFilm(alltagfilm, index) {
    setLoading({ [data[index].id]: true });
    const endpoint = isNaN(alltagfilm) ? `genre/${alltagfilm}` : "anime-movies";
    fetch(`https://gogoanime.herokuapp.com/${endpoint.toLowerCase()}`)
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
    fetch("https://gogoanime.herokuapp.com/recent-release")
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[0];
        filmrecent.video = animelist;
        setData([...data]); //speard operate
      });
    fetch("https://gogoanime.herokuapp.com/popular")
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[3];
        filmrecent.video = animelist;
        setData([...data]);
      });
    fetch("https://gogoanime.herokuapp.com/anime-movies")
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[1];
        filmrecent.video = animelist;
        setData([...data]);
      });
    fetch("https://gogoanime.herokuapp.com/genre/action")
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[2];
        filmrecent.video = animelist;
        setData([...data]);
      });
    fetch("https://gogoanime.herokuapp.com/top-airing")
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[4];
        filmrecent.video = animelist.filter((x, index) => index < 10);
        setData([...data]);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customContainer">
      <Header b={setToogleMenu} />
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
        <Route path="/genres/:keyword" element={<AllFilm video={listfilm} />} />

        <Route
          path="/search/:keyword"
          element={<SearchFilm Linkto={Linkto} />}
        />
        <Route
          path="/details/:keyword"
          element={<DetailsFilm video={detailFilm} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
