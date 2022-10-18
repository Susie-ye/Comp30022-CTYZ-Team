import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import ECookLogo from "/public/logo.svg";
import { CarryOutOutlined, HeartOutlined } from "@ant-design/icons";
import { LeftOutline, SendOutline } from "antd-mobile-icons";
import { Image } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { updateRecipe } from "../../redux/reducers/recipeSlice";


const demoSrc = "https://cookingwithayeh.com/wp-content/uploads/2021/11/Spicy-Tuna-Crispy-Rice.jpg";
const ViewPageHeader: React.FC<{
    recipeId: string, title: string | undefined, picture: string | undefined, isFavorite: boolean | undefined
}> = ({
          title,
          picture,
          recipeId,
          isFavorite
      }) => {
    const dispatch = useReduxDispatch();
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const onSetFavorite = () => {
        const recipe: IRecipe = {
            favorite: !isFavorite
        };
        dispatch(updateRecipe({ jwtToken, recipeId, recipe }));
    };
    const onSetHistory = () => {
        const recipe: IRecipe = {
            completed: (new Date()).toString()
        };
        dispatch(updateRecipe({ jwtToken, recipeId, recipe }));
    };
    return (
        <>
            <div className={styles["navigation"]}>
                <Link href="/">
                    <span className={styles["return"]}>
                        <LeftOutline />
                    </span>
                </Link>
                <ECookLogo />
                <Link href="/">
                    <span className={styles["share"]}>
                        <SendOutline />
                    </span>
                </Link>
            </div>
            <div style={{ userSelect: "none" }} className={styles["img"]}>
                <Image src={picture ? picture : demoSrc} className={styles["image"]} />
            </div>
            <div className={styles["functions"]}>
                <CarryOutOutlined
                    onClick={onSetHistory}
                    className={styles["complete"]}
                    twoToneColor="yellow"
                />

                <div className={styles["title"]}>
                    {title}
                </div>

                <HeartOutlined onClick={onSetFavorite} className={styles["favorite"]} />
            </div>
        </>
    );
};

export default ViewPageHeader;
