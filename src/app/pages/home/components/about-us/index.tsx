"use client";
import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Industries from "./industries";
import MobileAppDeployment from "./mobile-app-development";

const AboutUs = () => {
  const [showMoreDetails, setShowMoreDetails] = React.useState(true);

  return (
    <div id="about-us" className={style.container}>
      <div className={style.titleSection}>
        <div className={style.title}>About Home</div>
      </div>
      <div className={style.content}>
        <div className={style.contentSection}>
          <div>
            <p className={style.text}>
              At Caploitte, we believe in the transformative power of technology
              and its ability to shape the future. Our brand story is rooted in
              our passion for innovation and our commitment to helping
              businesses thrive in an ever-evolving digital landscape. We
              started with a vision to create a company that would revolutionize
              the way organizations harness technology, and today, we continue
              to push boundaries and drive positive change.
            </p>
            <br />
            <p className={style.text}>
              We serve a diverse range of clients, including startups, small and
              medium-sized enterprises (SMEs), and large corporations across
              various industries. Our expertise extends to sectors such as
              finance, healthcare, technology, manufacturing, retail, and more.
              Regardless of the industry or the size of the organization, we
              strive to provide tailored solutions that meet our clients&apos;
              unique needs and help them achieve their goals.
            </p>
            <br />
            <p className={style.text}>
              At Caploitte, our approach is based on collaboration, innovation,
              and a deep understanding of our clients&apos; businesses. We
              believe in building long-term partnerships that foster mutual
              growth and success. Our team of highly skilled professionals
              brings a wealth of experience and expertise to the table, working
              closely with clients to develop strategies, implement cutting-edge
              technologies, and drive digital transformation.
            </p>
            {showMoreDetails ? (
              <>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    className={style.readMoreBtn}
                    onClick={() => setShowMoreDetails(false)}
                  >
                    Read More...
                  </button>
                </div>
              </>
            ) : (
              <>
                <br />
                <p className={style.text}>
                  We take a holistic approach to solving business challenges,
                  combining our technical know-how with a keen understanding of
                  industry trends and best practices. Our services encompass a
                  wide range of areas, including IT consulting, software
                  development, cloud solutions, cybersecurity, data analytics,
                  and more. Through a comprehensive and customized approach, we
                  empower our clients to optimize their operations, enhance
                  their customer experiences, and unlock new opportunities for
                  growth.
                </p>
                <br />
                <p className={style.text}>
                  At Caploitte, our success is built upon the expertise and
                  dedication of our team. We are proud to have a diverse group
                  of professionals who are passionate about what they do and
                  committed to delivering excellence. Our team members are not
                  just experts in their respective fields; they are also
                  exceptional problem-solvers, creative thinkers, and trusted
                  advisors.
                </p>
                <br />
                <p className={style.text}>
                  We understand that technology can be complex, which is why we
                  strive to be approachable and transparent in our interactions
                  with clients. We believe in building strong relationships
                  based on trust, integrity, and open communication. When you
                  work with Caploitte, you can expect a personalized and
                  collaborative experience, where we listen to your needs,
                  understand your challenges, and work together to achieve
                  outstanding results.
                </p>
                <br />
                <p className={style.text}>
                  In addition to our client-centric approach, we also prioritize
                  social responsibility and sustainability. We actively seek
                  opportunities to make a positive impact on society and
                  contribute to a better future. Through initiatives such as
                  community outreach programs and environmental stewardship, we
                  aim to create lasting value beyond business success.
                </p>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    className={style.readMoreBtn}
                    onClick={() => setShowMoreDetails(true)}
                  >
                    Read Less...
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={style.serviceSection}>
          <div className={style.serviceContent}>
            <div className={style.service}>
              <div>
                <Image
                  src="/png/about-one.jpg"
                  alt="about-home"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className={style.service}>
              <div>
                <Image
                  src="/png/about-two.jpg"
                  alt="about-home"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={style.singleImageContent}>
            <div>
              <Image
                src="/png/about-third.jpg"
                alt="about-home"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Industries />
      </div>
      <div>
        <MobileAppDeployment />
      </div>
    </div>
  );
};

export default AboutUs;
