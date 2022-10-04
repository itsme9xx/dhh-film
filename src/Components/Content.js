import styles from "./Content.module.css";
// Import css files
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suggestFilmImg from "../assets/img/onepiece.jpg";
import FilmItem from "./FilmItem";
// const video = [
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
//   {
//     title: "Sát thủ đối đầu",
//     img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2017/9/29/567436/Liam-Neeson-Phim-Han.jpg",
//   },
// ];

function Content() {
  const [slide, setSlide] = useState([
    {
      title: "",
      img: "",
    },
  ]);
  useEffect(() => {
    fetch("https://gogoanime.herokuapp.com/anime-movies")
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
        <p>PHIM ĐỀ CỬ</p>
        <Slider {...settings}>
          {slide.map((x) => {
            return <FilmItem data={x} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Content;
