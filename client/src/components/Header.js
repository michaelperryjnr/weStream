import React from "react";
import avatar from "../assets/profile.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { searchValidate } from "../helper/validate";


export default function Header() {

    const formik = useFormik({
        initialValues : {
            search : "",
        },
        validate : searchValidate,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values => {
            console.log(values)
        }
    })

  return (
    <>
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      <header id="header" className="flex justify-center relative">
        <nav className="flex flex-row items-center px-3 py-2 gap-4">
          <form className="inline-flex flex-row" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Search.."
              className="text-white bg-slate-700 py-3 px-2 rounded-l-lg focus:bg-slate-500 focus:border-none focus:text-white border-none border-slate-500 lg:w-[600px] md:w-[450px] sm:w-[260px]" {...formik.getFieldProps('search')}
            />
            <button type="submit" className="text-md text-white bg-slate-950 border-solid py-2 px-2 rounded-r-lg border-slate-500 hover:bg-slate-900 overflow-hidden">
              Search
            </button>
          </form>
          <div className="w-1/3 inline-flex items-center gap-1">
            <img
              src={avatar}
              alt="logo"
              className="w-1/6 border-2 rounded-full border-blue-700 min-w-10 max-w-12 hover:cursor-pointer"
            />
            <h4 className="text-white text-sm hover:cursor-pointer">
              Michael Perry
            </h4>
          </div>
        </nav>
      </header>
    </>
  );
}
