import React from "react";
import { NextPage } from "next";
import Snack from "/public/snack.svg";
import Dessert from "/public/dessert.svg";
import Breakfast from "/public/breakfast.svg";
import Lunch from "/public/lunch.svg";
import Dinner from "/public/dinner.svg";
import Vegetarian from "/public/vegetarian.svg";
import styles from "./index.module.css";

const Category: NextPage = () => {
    return (
            <div className={styles["categories"]}>
                <Snack className={styles["category"]}/>
                <Dessert className={styles["category"]}/>
                <Breakfast className={styles["category"]}/>
                <Lunch className={styles["category"]}/>
                <Dinner className={styles["category"]}/>
                <Vegetarian className={styles["category"]}/>
            </div>

    );
};

export default Category;