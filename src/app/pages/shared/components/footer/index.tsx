import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logoSection}>
        <div className={style.rightSideARight}>
          <Image
            className={style.logoImage}
            src="/png/home.png"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <div className={style.companyName}>Home</div>
        <div>ENGINEERED FOR EXCELLENCE</div>
      </div>
      <div className={style.middleSection}>
        <div className={style.middleText}>
          We Build What You Love. We build high quality web and mobile
          applications which make you standout in competitive market.
        </div>
        <div className={style.middleIconsSections}>
          <div>
            <Image
              src="/png/footer-location.png"
              alt="human-one"
              width={40}
              height={40}
            />
            <div className={style.mt1}>Location</div>
            <div>Sri lanka</div>
          </div>
          <div>
            <Image
              src="/png/footer-email.png"
              alt="human-one"
              width={40}
              height={40}
            />
            <div className={style.mt1}>Email</div>
            <div>srpdayananda77@gmail.com</div>
          </div>
          <div>
            <Image
              src="/png/footer-skype.png"
              alt="human-one"
              width={40}
              height={40}
            />
            <div className={style.mt1}>Skype</div>
            <div>Home</div>
          </div>
          <div>
            <Image
              src="/png/footer-whatsapp.png"
              alt="human-one"
              width={40}
              height={40}
            />
            <div className={style.mt1}>Whatsapp</div>
            <div>+94771642571</div>
          </div>
        </div>
        <div className={style.middleIconsMobileSection}>
          <div className={style.iconsMobileContent}>
            <div className={style.iconMobile}>
              <div>
                <Image
                  src="/png/footer-location.png"
                  alt="human-one"
                  width={40}
                  height={40}
                />
                <div className={style.mt1}>Location</div>
                <div>Sri lanka</div>
              </div>
            </div>
            <div className={style.iconMobile}>
              <div>
                <Image
                  src="/png/footer-email.png"
                  alt="human-one"
                  width={40}
                  height={40}
                />
                <div className={style.mt1}>Email</div>
                <div>srpdayananda77@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={style.iconsMobileContent}>
            <div className={style.iconMobile}>
              <div>
                <Image
                  src="/png/footer-skype.png"
                  alt="human-one"
                  width={40}
                  height={40}
                />
                <div className={style.mt1}>Skype</div>
                <div>Home</div>
              </div>
            </div>
            <div className={style.iconMobile}>
              <div>
                <Image
                  src="/png/footer-whatsapp.png"
                  alt="human-one"
                  width={40}
                  height={40}
                />
                <div className={style.mt1}>Whatsapp</div>
                <div>+94771642571</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomSection}>
        <div className={style.bottomContent}>
          <div className={style.bottomLine}></div>
          <div className={style.bottomSectionLast}>
            <div>Home 2025</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
