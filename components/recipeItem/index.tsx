import React from "react";
import { Skeleton, BackTop, Image } from "antd";
import { List, SwipeAction, Toast, Dialog } from "antd-mobile";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { deleteRecipe } from "../../redux/reducers/recipeSlice";

const demoSrc =
    "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png";

interface RecipeListProps {
    recipeItem: IRecipeListRes | null;
    loading: boolean;
}

export const RecipeItem: React.FC<RecipeListProps> = ({
                                                          loading,
                                                          recipeItem
                                                      }) => {
    const dispatch = useReduxDispatch();
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const router = useRouter();
    const onDelete = () => {
        const recipeId = recipeItem?._id;
        dispatch(deleteRecipe({ jwtToken, recipeId }));
    };

    return (
        <div>
            <List>
                <SwipeAction
                    className={styles["delete"]}
                    rightActions={[
                        {
                            key: "delete",
                            text: "Delete",
                            color: "danger",
<<<<<<< HEAD

=======
>>>>>>> 313705fb0b4b6fdcae2bd087f05402e5718b9f7f
                            onClick: async () => {
                                await Dialog.confirm({
                                    content: "Are u sure to delete😧",
                                    cancelText: "Cancel",
                                    confirmText: "Confirm",
                                    onConfirm: async () => {
                                        onDelete();
                                        Toast.show({
                                            icon: "success",
                                            content: "Delete Successfully",
                                            position: "center"
                                        });
                                    }
                                });
<<<<<<< HEAD

=======
>>>>>>> 313705fb0b4b6fdcae2bd087f05402e5718b9f7f
                            }
                        }
                    ]}
                >
                    <Skeleton
                        loading={loading}
                        active
                        style={{ padding: "10px" }}
                    >
                        <List.Item
                            className={styles["recipeList"]}
                            key={recipeItem?._id}
                            prefix={
                                <Image
                                    className={styles.img}
                                    src={
                                        recipeItem?.picture
                                            ? recipeItem?.picture
                                            : demoSrc
                                    }
                                    width={150}
                                    height={107}
                                    alt="logo"
                                />
                            }
                            onClick={() =>
                                router.push(`/detail/${recipeItem?._id}`)
                            }
                        >
                            {recipeItem?.title}
                        </List.Item>
                    </Skeleton>
                </SwipeAction>
            </List>

            <BackTop />
        </div>
    );
};