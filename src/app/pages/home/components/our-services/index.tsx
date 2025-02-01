import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const OurServices = () => {
  return (
    <div id="our-service" className={style.container}>
      <div className={style.titleSection}>
        <div className={style.title}>Our Services</div>
      </div>
      <div className={style.content}>
        <div className={style.imageSection}>
          <Image
            src="/png/meeting.jpg"
            alt="meeting"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <div className={style.serviceSection}>
          <div className={style.serviceContent}>
            <div className={style.service}>
              <div>
                <Image
                  src="/png/web-development.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>Web Development</div>
              </div>
            </div>
            <div className={style.service}>
            <div>
                <Image
                  src="/png/e-commerce-development.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>E-Commerce Development</div>
              </div>
            </div>
          </div>
          <div className={style.serviceContent}>
            <div className={style.service}>
            <div>
                <Image
                  src="/png/mobile-development.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>Mobile App Development</div>
              </div>
            </div>
            <div className={style.service}>
            <div>
                <Image
                  src="/png/digital-marketing.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>Digital Marketing</div>
              </div>
            </div>
          </div>
          <div className={style.serviceContent}>
            <div className={style.service}>
            <div>
                <Image
                  src="/png/api-service.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>API Integration Services</div>
              </div>
            </div>
            <div className={style.service}>
            <div>
                <Image
                  src="/png/ux-ui-design.png"
                  alt="web-development"
                  width={80}
                  height={80}
                />
                <div className={style.serviceText}>UI/UX Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
