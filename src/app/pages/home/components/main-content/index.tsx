import styles from "./index.module.css";
import Image from "next/image";
import React from "react";

const MainContent = () => {
    return (
        <div>
          <div className={styles.firstStage}>
            <div className={styles.leftSideA}>
              <div className={styles.leftSideALeft}>
                <div>
                  <h1 className={styles.mainTitle}>
                    <span>Ready to take your business</span>
                    <br />
                    <span>to the next level?</span>
                  </h1>
                  <p className={styles.titleDescription}>
                    Experience the power of our high-quality web and mobile
                    application design and development services. Let us transform
                    your ideas into reality and propel your business towards
                    unprecedented success. Contact us today and embark on a journey
                    of growth and innovation.
                  </p>
                </div>
              </div>
              <div className={styles.leftSideARight}>
                <div className={styles.leftSideARightOne}></div>
                <div className={styles.leftSideARightTwo}></div>
              </div>
            </div>
            <div className={styles.rightSideA}>
              <div className={styles.rightSideALeft}>
                <div className={styles.rightSideALeftFirstStage}>
                  <div className={styles.rightSideALeftOne}></div>
                  <div className={styles.rightSideALefTwo}></div>
                </div>
                <div className={styles.rightSideALeftSecondStage}>
                  <div className={styles.rightSideALeftThird}></div>
                </div>
              </div>
              <div className={styles.rightSideARight}>
                <Image
                  className={styles.customImage}
                  src="/png/human-one.png"
                  alt="human-one"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className={styles.secondStage}>
            <div className={styles.leftSideB}>
              <div className={styles.leftSideBLeft}>
                <div className={styles.leftSideBLeftOne}>
                  <div className={styles.leftSideBLeftPartOne}>
                    <button className={styles.btnTalkToUs}>Talk to Us</button>
                  </div>
                  <div className={styles.leftSideBLeftPartTwo}></div>
                  <div className={styles.leftSideBLeftPartThird}></div>
                </div>
                <div className={styles.leftSideBLeftTwo}></div>
              </div>
              <div className={styles.leftSideBRight}>
                <div className={styles.leftSideBRightOne}></div>
                <div className={styles.leftSideBRightTwo}></div>
              </div>
            </div>
            <div className={styles.rightSideB}>
              <div className={styles.rightSideBLeft}>
                <Image
                  className={styles.customImage}
                  src="/png/human-one.png"
                  alt="human-one"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.rightSideBCenter}>
                <div className={styles.rightSideBCenterOne}></div>
                <div className={styles.rightSideBCenterTwo}></div>
              </div>
              <div className={styles.rightSideBRight}>
                <Image
                  className={styles.customImage}
                  src="/png/human-one.png"
                  alt="human-one"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default MainContent;
