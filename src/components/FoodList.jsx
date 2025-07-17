import React from "react";
import FoodItem from "./FoodItem";
import styles from "../styles/foodList.module.css";

export default function FoodList({ foodData }) {
  return (
    <div className={styles.grid}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
