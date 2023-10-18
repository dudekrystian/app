import React from "react";
import styles from "./page.module.css";
import Image from "next/image";




const BlogPost =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
          </p>
          <div className={styles.author}>
            <Image
              src={""}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"data.username"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/1569002/pexels-photo-1569002.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {"data.content"}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
