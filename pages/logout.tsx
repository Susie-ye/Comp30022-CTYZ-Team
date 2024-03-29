import React, { useEffect } from "react";
import { Button, Layout } from "antd";
import { NextPage } from "next";
import styles from "../styles/logout.module.css";
import Link from "next/link";
import { LeftOutline } from "antd-mobile-icons";
import { useReduxDispatch } from "../redux/hooks";
import { authenticationSlice } from "../redux/reducers/authSlice";

const { Header, Content } = Layout;

const Logout: NextPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#FFF9EB";
    });
    const dispatch = useReduxDispatch();
    const onLogout = () => {
        dispatch(authenticationSlice.actions.logout());
    };
    return (
        <Layout>
            <Header className={styles["header"]}>
                <div>
                    <Link href="/">
                        <span className={styles["navBar"]}>
                            <LeftOutline />
                        </span>
                    </Link>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles["seeu"]}>
                    <h1 className={styles["heading"]}>See U Soon...</h1>
                </div>
                <div className={styles["logout"]}>
                    <Link href="./intro">
                        <Button type="dashed" block onClick={onLogout}>
                            Log out
                        </Button>
                    </Link>
                </div>
            </Content>
        </Layout>
    );
};

export default Logout;
