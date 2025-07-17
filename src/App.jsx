import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState("");

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                foodData={foodData}
                setFoodData={setFoodData}
                error={error}
                setError={setError}
              />
              {!error && <FoodList foodData={foodData} />}
            </>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <>
              <FoodDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
