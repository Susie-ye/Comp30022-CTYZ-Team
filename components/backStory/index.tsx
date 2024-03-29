import React from "react";
import styles from "./index.module.css";
import BackStoryLogo from "/public/backStory.svg";


const BackStory: React.FC<{ backStory: string | undefined }> = ({ backStory }) => {
    return (
        <>
            <div className={styles["ingredients"]}>
                <BackStoryLogo />
                <p>{backStory}</p>
            </div>
        </>
    );
};

export default BackStory;
