import { NextPage } from "next";
import { RecipeList } from "../components/recipeList";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/list.module.css";

const { Header, Content } = Layout;

const FavoriteList: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined }));
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <h1 className={styles.pageTitle}>Favorite List 💝</h1>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles.recipeList}>
                    <RecipeList loading={loading} recipeList={recipeList} />
                </div>
            </Content>
        </Layout>
    );
};

export default FavoriteList;
