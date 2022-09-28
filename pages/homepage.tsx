import { NextPage } from "next";
import React, { useEffect } from "react";
import { SearchBar } from "../components/searchBar";
import { Button, Layout } from "antd";
import styles from "../styles/homepage.module.css";
import Link from "next/link";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import FooterNavBar from "../components/footerNavBar";
import Category from "../components/category";
import { useRouter } from "next/router";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { getCategories } from "../redux/reducers/categorySlice";

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
    const router = useRouter();

    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const categories = useReduxSelector(s => s.category.categories);
    const dispatch = useReduxDispatch();
    useEffect(() => {
        if (jwtToken) {
            dispatch(getCategories(jwtToken));
        }
    }, [jwtToken]);
    console.log(categories);
    return (
        <Layout className={styles["fullPage"]}>
            <Header className={styles["header"]}>
                <div className={styles["headerNav"]}>
                    <Link href="/login">
                        <span className={styles["user"]}>
                            <UserOutlined />
                        </span>
                    </Link>
                    <h1 className={styles.pageTitle}>What to eat?</h1>
                    <Link href="/">
                        <span className={styles["shoppingList"]}>
                            <ShoppingCartOutlined />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles["searchBar"]}>
                    <SearchBar isHome= {true}/>
                </div>
                <div className={styles["category"]}>
                    <Category />
                </div>
            </Content>
            <Button onClick={() => router.push("./recipes")}>My Recipes</Button>
            <Footer className={styles["footer"]}/>
        </Layout>
    );
};

export default Home;