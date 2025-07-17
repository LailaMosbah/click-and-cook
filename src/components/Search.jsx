import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/search.module.css";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cb57316ac0474a658dcf4c9802ce015a";

function Search({ foodData, setFoodData, error, setError }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    let params = {
      query: query,
      apiKey: API_KEY,
    };

    axios
      .get(baseURL, { params })
      .then((respose) => {
        // console.log("response");
        //console.log(respose);
        //console.log(respose.data.results);
        setFoodData(respose.data.results);
        //console.log("food data");
        console.log(foodData);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong. Please try again later.");
      });
  }, [query]);
  return (
    <>
      <div className={styles.containerSearch}>
        <input
          className={styles.input}
          type="text"
          value={query}
          placeholder="Search for Recipe"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {error && (
        <div
          style={{
            textAlign: "center",
            color: "#C14600",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}

export default Search;
