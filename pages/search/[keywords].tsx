import { NextPage } from "next";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import React, { useEffect } from "react";
import { getRecipeList } from "../../redux/reducers/recipeSlice";
import { useRouter } from "next/router";
import { Layout } from "antd";
import styles from "../../styles/search.module.css";
import ECookLogo from "../../public/logo.svg";
import { NavBar } from "antd-mobile";
import recipesGenerator from "../../components/recipeItem/recipesGenerator";

const { Header, Content } = Layout;

const SearchResult: NextPage = () => {
    const router = useRouter();
    const { keywords } = router.query;
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.recipe.loading);
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = "white";
        dispatch(getRecipeList({ jwtToken, keywords, categoryId: undefined }));
    }, [jwtToken, keywords]);
    const recipeItems: JSX.Element[] = recipesGenerator(recipeList, loading, false);

    const back = () => {
        router.back();
    };

    return (
        <Layout>
            <Header className={styles["header"]}>
                <NavBar
                    className={styles["headerNav"]}
                    onBack={back}
                >
                    <ECookLogo className={styles.logo} />
                </NavBar>
            </Header>
            <Content>
                <div className={styles.recipeList}>{recipeItems}</div>
            </Content>
        </Layout>
    );
};

export default SearchResult;
