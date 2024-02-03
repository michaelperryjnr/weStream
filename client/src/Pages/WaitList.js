import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/waitlist.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { waitlistValidate } from "../helper/validate";
import SubmitLoader from "../helper/waitlistSubmit";

export default function WaitList() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      consentToNewsletter: false,
    },
    validate: waitlistValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },

  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center h-screen max-sm:w-screen flex-col max-sm:items-center px-5">
        <h1 className="text-4xl max-sm:text-2xl max-sm:text-center lg:text-7xl">
          Netflix and Chill over distance?
        </h1>
        <h1 className="text-4xl font-semibold max-sm:text-2xl max-sm: max-sm:text-center lg:text-6xl">
          Stream <span className="text-yellow-500">together</span>, same{" "}
          <span className="text-yellow-500">time</span>, same{" "}
          <span className="text-yellow-500">movie </span>
        </h1>
        <a
          className="text-2xl my-7 rounded-[25px] border-teal-700 border-[4px] w-fit px-3 py-3 cursor-pointer animate-bounce hover:animate-none hover:text-yellow-600 hover:border-teal-600 lg:my-10"
          href="#WaitlistForm"
        >
          Join Our WaitList
        </a>
      </div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form
        className="h-screen px-4 py-6 container mx-auto flex justify-center items-center flex-col"
        onSubmit={formik.handleSubmit}
        id="WaitlistForm"
      >
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <h1 className="text-center font-bold text-5xl text-teal-500 mb-7 max-sm:text-4xl max-sm:my-3">
          Join The Waitlist
        </h1>
        <div className="flex flex-col gap-7 px-3 py-4 my-4">
          <input
            type="text"
            placeholder="Name"
            className="text-white bg-slate-700 py-5 px-4 rounded-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[400px]"
            required="true"
            {...formik.getFieldProps("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="text-white bg-slate-700 py-5 px-4 rounded-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[400px]"
            required="true"
            {...formik.getFieldProps("email")}
          />
          {/* <input
            type="text"
            placeholder="Email"
            className="text-white bg-slate-700 py-3 px-2 rounded-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[260px]"
            {...formik.getFieldProps("consentToNewsLetter")}
          /> */}
        </div>
        <button
          type="submit"
          className="text-2xl my-7 max-sm:my-2 rounded-[15px] border-teal-700 border-[4px] w-fit px-5 py-3 cursor-pointer  hover:text-yellow-600 hover:border-teal-600 lg:my-10 max-sm:text-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
