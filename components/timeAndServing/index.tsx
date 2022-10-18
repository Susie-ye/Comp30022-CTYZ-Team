import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.css";

const TimeAndServing: React.FC<{ time: number | undefined, servings: number | undefined }> = ({ time, servings }) => {
    return (
        <>
            <Row className={styles["row"]}>
                <Col className={styles["time"]}>🕓 {time} min</Col>
                <Col className={styles["servings"]}>🍴 {servings}</Col>
            </Row>
        </>
    );
};

export default TimeAndServing;
