"use client";
import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

import { Service } from "../../../enum/about";

const DevService = () => {
  const [activeDevService, setActiveDevService] = React.useState(
    Service.mobileAppDevelopment
  );

  return (
    <div className={style.container}>
      <div className={style.serviceContent}>
        <div className={style.mainContent}>
          <div className={style.menuItemContent}>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.mobileAppDevelopment)}
              style={{
                background:
                  activeDevService === Service.mobileAppDevelopment
                    ? "#fc066df1"
                    : "",
                color:
                  activeDevService === Service.mobileAppDevelopment
                    ? "#fff"
                    : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/mobile-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>Mobile App Development</div>
            </div>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.webDevelopment)}
              style={{
                background:
                  activeDevService === Service.webDevelopment
                    ? "#fc066df1"
                    : "",
                color:
                  activeDevService === Service.webDevelopment ? "#fff" : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/web-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>Web Applications</div>
            </div>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.cms)}
              style={{
                background: activeDevService === Service.cms ? "#fc066df1" : "",
                color: activeDevService === Service.cms ? "#fff" : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/cms-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>CMS & Framework</div>
            </div>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.backendDevelopment)}
              style={{
                background:
                  activeDevService === Service.backendDevelopment
                    ? "#fc066df1"
                    : "",
                color:
                  activeDevService === Service.backendDevelopment ? "#fff" : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/backend-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>Backend Development</div>
            </div>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.uiUxDesign)}
              style={{
                background:
                  activeDevService === Service.uiUxDesign ? "#fc066df1" : "",
                color: activeDevService === Service.uiUxDesign ? "#fff" : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/ui-ux-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>UI/UX Design</div>
            </div>
            <div
              className={style.menuItem}
              onClick={() => setActiveDevService(Service.apiServices)}
              style={{
                background:
                  activeDevService === Service.apiServices ? "#fc066df1" : "",
                color: activeDevService === Service.apiServices ? "#fff" : "",
              }}
            >
              <div>
                <Image
                  src="/png/about/api-icon.png"
                  alt="meeting"
                  width={35}
                  height={35}
                />
              </div>
              <div>API Services</div>
            </div>
          </div>
          {activeDevService === Service.mobileAppDevelopment && (
            <div className={style.bodyContent}>
              <div className={style.title}>Mobile App Development</div>
              <div className={style.body}>
                In today&apos;s digital era, mobile applications have become an
                integral part of our lives. From communication and entertainment
                to shopping and productivity, mobile apps have revolutionized
                the way we interact with technology. Whether you are a business
                owner looking to expand your reach or an individual with a
                unique app idea, mobile application development plays a crucial
                role in achieving success and staying ahead in the competitive
                market.
              </div>
              <div className={style.bodyIconsContent}>
                <div className={style.bodyIconsContainer}>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/swift.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Swift</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/java.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Java</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/kotlin.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Kotlin</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/react.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>React</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeDevService === Service.webDevelopment && (
            <div className={style.bodyContent}>
              <div className={style.title}>Web Development</div>
              <div className={style.body}>
                Web application development plays a vital role in the modern
                digital landscape. With the exponential growth of the internet
                and the increasing reliance on technology, businesses and
                individuals alike need robust and user-friendly web applications
                to meet their diverse needs. Whether it&apos;s a small business
                seeking an online presence, an e-commerce giant aiming to
                streamline operations, or an enterprise looking for process
                automation, web application development is crucial for success.
              </div>
              <div className={style.bodyIconsContent}>
                <div className={style.bodyIconsContainer}>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/angular.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Angular</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/react.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>React</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/nodeJs.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>NodeJS</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/vueJs.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Vue JS</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeDevService === Service.cms && (
            <div className={style.bodyContent}>
              <div className={style.title}>CMS & Framework</div>
              <div className={style.body}>
                As a Top Website Development Company we work with all popular
                CMS & Frameworks. We are one of the Best WordPress Development
                Company, Best Laravel Development Company, Best Codeigniter
                Development Company and Best Magneto Development Company, who
                have an expert team of each CMS and Framework. Our Team is well
                experienced in using any CMS and Framework with best of it.
              </div>
              <div className={style.bodyIconsContent}>
                <div className={style.bodyIconsContainer}>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/wordPress.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Wordpress</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/woo-commerce.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Woo Commerce</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeDevService === Service.backendDevelopment && (
            <div className={style.bodyContent}>
              <div className={style.title}>Backend Development</div>
              <div className={style.body}>
                Our team is well versed and skilled enough to work on all Open
                Source Platforms. As a Best Open Source Development Company we
                provide high quality Open Source Development Services for kind
                of Frontend and Backend Web Application Needs. Thats why we are
                Top AngularJS Development Company, Top Nodejs Development
                Company, Top ReactJS Development Company and Top VueJs
                Development Company.
              </div>
              <div className={style.bodyIconsContent}>
                <div className={style.bodyIconsContainer}>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/my-sql.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>MySQL</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/sql.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>MS SQL Server</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/postgres-sql.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Postgres SQL</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/mongo-db.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>MongoDB</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/redis.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Redis</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/aws.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>AMS RDS</div>
                  </div>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/elastic-search.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Elastic Search</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeDevService === Service.uiUxDesign && (
            <div className={style.bodyContent}>
              <div className={style.title}>UI/UX Design</div>
              <div className={style.body}>
                In today&apos;s digital landscape, user experience (UX) and user
                interface (UI) design have become integral components of any
                successful online venture. UI/UX design focuses on creating
                meaningful and enjoyable interactions between users and digital
                products or services. It aims to enhance user satisfaction,
                improve usability, and increase overall engagement.
              </div>
              <div className={style.bodyIconsContent}>
                <div className={style.bodyIconsContainer}>
                  <div className={style.bodyIcon}>
                    <div>
                      <Image
                        src="/png/about/figma.png"
                        alt="meeting"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>Figma</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeDevService === Service.apiServices && (
            <div className={style.bodyContent}>
              <div className={style.title}>Api Services</div>
              <div className={style.body}>
                We have experts who make high performing Back-end and APIs for
                Mobile Applications and SOftware Applications. We are experts in
                developing custom Rest Apis and the same time our team is well
                experienced in working with any third party apis.
              </div>
            </div>
          )}
        </div>
        <div className={style.webActive}>
          <div className={style.devServiceImage}>
            {activeDevService === Service.mobileAppDevelopment ? (
              <Image
                src="/png/about/smartphone.jpg"
                alt="meeting"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100vh" }}
              />
            ) : (
              <>
                {" "}
                {activeDevService === Service.webDevelopment ? (
                  <Image
                    src="/png/about/web-development.jpg"
                    alt="meeting"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100vh" }}
                  />
                ) : (
                  <>
                    {" "}
                    {activeDevService === Service.cms ? (
                      <Image
                        src="/png/about/free-work.jpg"
                        alt="meeting"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100vh" }}
                      />
                    ) : (
                      <>
                        {" "}
                        {activeDevService === Service.backendDevelopment ? (
                          <Image
                            src="/png/about/open_source.jpg"
                            alt="meeting"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "100vh" }}
                          />
                        ) : (
                          <>
                            {" "}
                            {activeDevService === Service.uiUxDesign ? (
                              <Image
                                src="/png/about/ux-ui.jpg"
                                alt="meeting"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "100vh" }}
                              />
                            ) : (
                              <Image
                                src="/png/about/use-api.jpg"
                                alt="meeting"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "100vh" }}
                              />
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className={style.secondContent}>
        <div className={style.secondContentImageSection}>
          <div className={style.devServiceImage}>
            <Image
              src="/png/about/development.jpg"
              alt="meeting"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <div className={style.secondContentBody}>
          <div className={style.secondBodySection}>
            <div className={style.title}>
              Choose Caploitte - Your Partner for Next-Level Software Solutions
            </div>
            <div className={style.body}>
              Are you seeking a software company that can bring fresh ideas,
              innovative solutions, and a personalized approach to your
              business? Look no further than Caploitte. As a new software
              company, we offer unique advantages that set us apart and make us
              an ideal choice for your software needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevService;
