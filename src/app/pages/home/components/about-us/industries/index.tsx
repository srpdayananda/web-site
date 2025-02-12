"use client";
import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

const Industries = () => {
  return (
    <div className={style.container}>
      <div style={{ width: "100%" }}>
        <div className={style.titleSection}>
          <div className={style.title}>We Serve All Industries</div>
        </div>
        <div className={style.content}>
          <div className={style.subContent}>
            <div className={style.serviceContent}>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/restaurant.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>Hotel & Restaurant</div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/education.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Education & E-learning
                  </div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/media.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Media & Entertainment
                  </div>
                </div>
              </div>
            </div>
            <div className={style.serviceContent}>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/fitness.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>Health & Fitness</div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/bank-and-finance.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Banking & Finance
                  </div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/dating.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Dating
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.subContent}>
            <div className={style.serviceContent}>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/real-state.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>Real Estate</div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/transport.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Transport
                  </div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/health.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Healthcare Solution
                  </div>
                </div>
              </div>
            </div>
            <div className={style.serviceContent}>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/ecommerce.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>E-Commerce</div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/travel.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Travel & Hospitality
                  </div>
                </div>
              </div>
              <div className={style.service}>
                <div>
                  <Image
                    src="/png/sports.png"
                    alt="web-development"
                    width={60}
                    height={60}
                  />
                  <div className={style.serviceText}>
                    Sports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
