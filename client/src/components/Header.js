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
     <div className="flex items-center justify-between w-full max-w-md mx-auto px-4 py-2 bg-slate-900 rounded-lg shadow-md dark:bg-gray-900 mt-4">
       <form
         className="flex items-center flex-1"
         onSubmit={formik.handleSubmit}
       >
         <input
           className="w-full py-2 pr-4 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0 dark:text-gray-100"
           placeholder="Search..."
           type="search"
           {...formik.getFieldProps("search")}
         />
         <button
           className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
           size="icon"
           variant="ghost"
         >
           <SearchIcon className="w-5 h-5" />
         </button>
       </form>
       <div className="ml-4">
         <div className="w-8 h-8 rounded-full border-2 border-blue-800">
           <img alt="Profile" src={avatar} />
         </div>
       </div>
     </div>
   );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}