import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/foodDetails.module.css";

const API_KEY = "cb57316ac0474a658dcf4c9802ce015a";

export default function FoodDetails() {
  const [foodRecipe, setFoodRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const baseURL = `https://api.spoonacular.com/recipes/${id}/information`;

  useEffect(() => {
    axios
      .get(baseURL, { params: { id, apiKey: API_KEY } })
      .then((res) => {
        setFoodRecipe(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id, baseURL]);

  if (isLoading) return <p className={styles.loading}>Loading...</p>;
  if (!foodRecipe) return <p className={styles.error}>No data found.</p>;

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{foodRecipe.title}</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <ul>
            <li>Ready in {foodRecipe.readyInMinutes}</li>
            <li>
              Services for {foodRecipe.servings} person
              {foodRecipe.servings > 1 ? "s" : ""}
            </li>
            <li>{foodRecipe.dairyFree ? "Dairy Free" : "Not Dairy Free"}</li>
            <li>{foodRecipe.glutenFree ? "Gluten Free" : "Not Gluten Free"}</li>
            <li>{foodRecipe.vegan ? "Vegan" : "Not Vegan"}</li>
            <li>{foodRecipe.vegetarian ? "Vegetarian" : "Not Vegetarian"}</li>
          </ul>
        </div>

        <img
          className={styles.image}
          src={foodRecipe.image}
          alt="Image of Recipe"
        />
      </div>
      <div>
        <h3>Ingredients</h3>
        <section className={styles.ingredients}>
          {foodRecipe.extendedIngredients.map((item) => (
            <div key={item.id} className={styles.ingredientItem}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                alt={item.name}
                className={styles.ingredientImage}
              />
              <p>
                {item.name} — {item.amount} {item.unit}
              </p>
            </div>
          ))}
        </section>
      </div>

      <div className={styles.steps}>
        <h3>Steps</h3>
        <ul>
          {foodRecipe.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
