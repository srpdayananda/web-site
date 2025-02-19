"use client";
import React from "react";
import { useForm } from "react-hook-form";
import style from "./index.module.scss";
import Image from "next/image";

const TalkToUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div id="talk-to-us" className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainContentImageSection}>
          <div className={style.devServiceImage}>
            <Image
              src="/png/talk-to-us/talk-to-us.jpg"
              alt="meeting"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "80vh", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className={style.mainContentBody}>
          <div className={style.mainBodySection}>
            <div className={style.title}>Talk to Us</div>
            <div className={style.body}>
              <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                {/* Full Name */}
                <div className={style.formGroup}>
                  <label className={style.label}>Full Name</label>
                  <input
                    className={style.inputFled}
                    type="text"
                    placeholder="Your full name"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                  />
                  {errors.fullName?.message && (
                    <p className={style.error}>
                      {String(errors.fullName.message)}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className={style.formGroup}>
                  <label className={style.label}>Email</label>
                  <input
                    className={style.inputFled}
                    type="email"
                    placeholder="Your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email?.message && (
                    <p className={style.error}>
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className={style.formGroup}>
                  <label className={style.label}>Phone Number</label>
                  <input
                    className={style.inputFled}
                    type="text"
                    placeholder="Your phone number"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phoneNumber?.message && (
                    <p className={style.error}>
                      {String(errors.phoneNumber.message)}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className={style.formGroup}>
                  <label className={style.label}>Message</label>
                  <input type="text"
                    placeholder="Your message"
                    className={style.inputFled}
                    {...register("message")}
                  ></input>
                </div>

                <button type="submit" className={style.submitBtn}>
                  Send Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
