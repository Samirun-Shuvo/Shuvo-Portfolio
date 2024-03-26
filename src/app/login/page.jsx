"use client";
import React from "react";
import styles from "./login.module.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className={styles.login_section}>
        <div className={styles.login_container}>
          <div className={styles.login_form}>
            <h2 className="text-center text-2xl font-bold">Admin-Login</h2>
            <form>
              <input type="email" placeholder="Email" name="email" required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
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
