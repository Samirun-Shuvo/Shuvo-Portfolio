"use client";
import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
      // axios
      // .get("http://localhost:5000/login")
      // .then((res) => log(res));
  };

  return (
    <>
      <div className={styles.login_section}>
        <div className={styles.login_container}>
          <div className={styles.login_form}>
            <h2 className="text-center text-2xl font-bold">Admin-Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <div className="flex justify-center items-center">
                <button
                  className="px-12 inline-block py-2 w-full sm:w-fit rounded-sm mt-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center">
              <Link href="/">
                <button className="hover:text-[gray]">Back To Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
