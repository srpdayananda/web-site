import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { FaPhone, FaWhatsapp, FaEnvelope, FaSkype } from "react-icons/fa";

const OurOffice = () => {
  return (
    <div id="our-office" className={style.container}>
      <div className={style.mainContent}>
        <div>
          <div className={style.title}>Our Office</div>
          <div className={style.officeSection}>
            <div className={style.officeBox}>
              <div className={style.image}>
                <Image
                  src="/png/our-office/office-colombo.jpeg"
                  alt="web-development"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={style.country}>Sri Lanka</div>
              <div className={style.adders}>123, colombo 07, 1001</div>
              <div className={style.iconsSection}>
                <div className={style.iconBox}>
                  <a href="tel:+1234567890" className={style.icon}>
                    <FaPhone size={20} color="black" />
                  </a>
                </div>
                <div className={style.iconBox}>
                  <a
                    href="https://wa.me/1234567890"
                    className={style.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={20} color="green" />
                  </a>
                </div>
                <div className={style.iconBox}>
                  <a href="mailto:example@email.com" className={style.icon}>
                    <FaEnvelope size={20} color="red" />
                  </a>
                </div>
                <div className={style.iconBox}>
                  <a href="skype:live:example?chat" className={style.icon}>
                    <FaSkype size={20} color="blue" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
