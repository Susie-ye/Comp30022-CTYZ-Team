import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Col, Row } from "antd";
import { Box } from "@chakra-ui/react";

interface CategoryIntro extends ICategory {
    key: number;
}

interface PropsType {
    categoryList: ICategory[] | null;
    loading: boolean;
}

const Category: React.FC<PropsType> = ({ categoryList, loading }) => {
    const categoryData: CategoryIntro[] = categoryList
        ? categoryList.map((c, index) => ({
            key: index,
            ...c
        }))
        : [];

    return (
        <div className={styles["categories"]}>
            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
<<<<<<< HEAD
                        {/* <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card> */}
=======
>>>>>>> 313705fb0b4b6fdcae2bd087f05402e5718b9f7f
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={
                                    "https://cdn.broadsheet.com.au/cache/47/a2/47a2d923be188058c559282a338944a5.jpg"
                                }
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={
                                    "https://cdn.broadsheet.com.au/cache/4c/b6/4cb64a6fc45d7d50587cb0b37d800835.jpg"
                                }
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>

            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />
                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>

            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>
            {/*<div className={styles["categories"]}>*/}
            {/*    <Snack className={styles["category"]} />*/}
            {/*    <Dessert className={styles["category"]} />*/}
            {/*    <Breakfast className={styles["category"]} />*/}
            {/*    <Lunch className={styles["category"]} />*/}
            {/*    <Dinner className={styles["category"]} />*/}
            {/*    <Vegetarian className={styles["category"]} />*/}
            {/*</div>*/}
        </div>
    );
};

export default Category;
