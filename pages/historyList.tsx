import { NextPage } from "next";
import { RecipeItem } from "../components/recipeItem";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";
import React from "react";
import { Layout } from "antd";
import styles from "../styles/list.module.css";

const { Header, Content } = Layout;

const HistoryList: NextPage = () => {
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const historyList: IRecipeListRes[] = [];
    if (recipeList) {
        for (const r of recipeList) {
            r.completed ? historyList.push(r) : null;
        }
    }
    const recipeItems: JSX.Element[] = [];
    for (const r of historyList) {
        recipeItems.push(<RecipeItem loading={loading} recipeItem={r} isFavList={false} />);
    }
    const dispatch = useReduxDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = "white";
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId: undefined }));
        }
    }, [jwtToken]);

    return (
        <Layout>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <h1 className={styles.pageTitle}>History List 👩‍🍳</h1>
                </div>
            </Header>
            <Content>
                <div className={styles.recipeList}>
                    {recipeItems}
                </div>
            </Content>
        </Layout>
    );
};

export default HistoryList;
