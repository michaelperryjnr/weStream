import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { usernameValidate } from "../helper/validate";

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onsubmit : async values => {
      console.log(values)
    } 
  });
  return (
    <></>
    // <div className="container mx-auto">

    // <Toaster position="top-center" reverseOrder={false}></Toaster>

    //   <div className="flex justify-center items-center h-screen">
    //     <div className={styles.glass}>
    //       <div className="title flex flex-col items-center">
    //         <h4 className="text-5xl font-bold">Hello Again</h4>
    //         <span className="py-4 text-xl w-2/3 text-center text-gray-500">
    //           Explore More by connecting with us
    //         </span>
    //       </div>
    //       <form className="py-1" onSubmit={formik.handleSubmit}>
    //         <div className="profile flex justify-center py-4">
    //           <img src={avatar} alt="avatar" className={styles.profile_img} />
    //         </div>
    //         <div className="textbox flex flex-col items-center gap-3">
    //           <input
    //             className={styles.textbox}
    //             type="text"
    //             placeholder="Username"
    //             {...formik.getFieldProps('username')}
    //           />
    //           <button className={styles.btn} type="submit">
    //             Let's go
    //           </button>
    //         </div>
    //         <div className="text-center py-4">
    //           <span className="text-gray-500">
    //             Not a Member{" "}
    //             <Link className="text-red-500" to="/register">
    //               Register
    //             </Link>
    //           </span>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
