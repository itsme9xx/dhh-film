import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListFilm from "./ListFilm";
import styles from "./SearchFilm.module.css";
function SearchFilm(props) {
  const param = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://anime-api-sandy.vercel.app/api/anime-movies")
      .then((response) => response.json())
      .then((animelist) => {
        setItems(
          animelist.filter((item) => {
            if (
              item.animeTitle
                .toLowerCase()
                .includes(param.keyword.toLowerCase())
            ) {
              return true;
            }
          })
        );
      });
  }, [param.keyword]);

  return (
    <div className={styles.searchFilm}>
      <ListFilm video={items} Linkto={props.Linkto} />
    </div>
  );
}

export default SearchFilm;
