import React from "react";
import styles from "../styles/foodItem.module.css";
import { useNavigate } from "react-router-dom";

export default function FoodItem({ food }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <h2 className={styles.title}>{food.title}</h2>
      <button
        className={styles.button}
        onClick={() => navigate(`/recipe/${food.id}`)}
      >
        View Recipe
      </button>
    </div>
  );
}
