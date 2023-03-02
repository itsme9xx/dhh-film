import styles from "./Content.module.css";
// Import css files
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FilmItem from "./FilmItem";

function Content(props) {
  // console.log("content", props);
  const [slide, setSlide] = useState([
    {
      title: "",
      img: "",
    },
  ]);

  useEffect(() => {
    fetch("https://anime-api-sandy.vercel.app/api/anime-movies")
      .then((response) => response.json())
      .then((animelist) => {
        setSlide([...animelist]);
      });
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    className: "slider variable-width",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`container ${styles.content}`}>
      <div className={styles.suggestfilm}>
        <p>PHIM SẮP CHIẾU</p>
        <Slider {...settings}>
          {slide.map((x, index) => {
            return (
              <div key={index}>
                <FilmItem
                  Linkto={props.Linkto}
                  key={index}
                  data={x}
                  Special={props.Special}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Content;
