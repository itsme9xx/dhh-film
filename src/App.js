import { useEffect, useState } from "react";
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

function App() {
  const [data, setData] = useState([
    {
      title: "PHIM LẺ MỚI CẬP NHẬT",
      largeItem: true,
      tag: ["Action", "Adventure", "Comedy", "Dementia"],
      video: [],
    },
    {
      title: "PHIM CHIẾU RẠP",
      largeItem: true,
      tag: ["2021", "2020", "2019", "2018"],
      video: [],
    },
    {
      title: "PHIM BỘ MỚI CẬP NHẬT",
      largeItem: true,
      tag: ["Hàn Quốc", "Trung Quốc", "Âu-Mỹ", "Phim Bộ Full"],
      video: [],
    },
    {
      title: "PHIM THỊNH HÀNH",
      largeItem: true,
      tag: ["Phim Lẻ Thịnh Hành", "Phim Bộ Thịnh Hành"],
      video: [],
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
  function viewAllTagFilm(alltagfilm) {
    fetch(`https://gogoanime.herokuapp.com/genre/${alltagfilm.toLowerCase()}`)
      .then((response) => response.json())
      .then((animelist) => {
        const filmrecent = data[0];
        filmrecent.video = animelist;
        setData([...data]);
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
                        viewAllTagFilm={viewAllTagFilm}
                        viewAllFilm={viewAllFilm}
                        video={x.video}
                        title={x.title}
                        tag={x.tag}
                      />
                      <ListFilm
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
        <Route path="/allfilm" element={<AllFilm video={listfilm} />} />

        <Route
          path="/search/:keyword"
          element={<SearchFilm Linkto={Linkto} />}
        />
        <Route path="/details" element={<DetailsFilm video={detailFilm} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
