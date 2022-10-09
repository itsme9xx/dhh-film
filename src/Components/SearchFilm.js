import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListFilm from "./ListFilm";
import styles from "./SearchFilm.module.css";
function SearchFilm(props) {
  const params = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://gogoanime.herokuapp.com/anime-movies")
      .then((response) => response.json())
      .then((animelist) => {
        setItems(
          animelist.filter((item) => {
            if (
              item.animeTitle
                .toLowerCase()
                .includes(params.keyword.toLowerCase())
            ) {
              return true;
            }
          })
        );
      });
  }, [params.keyword]);

  return (
    <div className={styles.searchFilm}>
      <ListFilm video={items} Linkto={props.Linkto} />
    </div>
  );
}

export default SearchFilm;
