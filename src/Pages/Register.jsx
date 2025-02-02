import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import animation1 from "../../public/lottie/Animation1.json"
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const {createUser}=useContext(AuthContext)
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    createUser(data.email,data.password)
    .then(result=>{
 
         const loggedUser=result.user
         console.log(loggedUser)
         setTimeout(()=>{
          navigate('/')
         },1000)
         toast.success("User Login Successful")
    })
    console.log(data);
  } 
  return (
    <div className="flex justify-center  md:flex-row  flex-col items-center min-h-screen bg-gray-100 p-5  ">
        <div className="md:h-[400px] md:w-[400px] h-[150px] w-[150px]">
            <Lottie animationData={animation1}
            ></Lottie>
        </div>
      <div className="card bg-white w-full 
      md:w-1/3 max-w-sm shrink-0 shadow-lg border border-gray-200 rounded-xl p-8" >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
            {...register("name",{required:"Name is required"})}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
             
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
            {...register("photo",{required:"Photo URL is required"})}
              type="text"
              placeholder="Your Photo"
              className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
             
            />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email",{required:"Email is required"})}
              type="email"
              placeholder="Your Email"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
             
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            {...register("password",{required:"password is required",minLength:{value:6,message:"password must be at least 6 characters long"}})}
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
             
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full btn-accent py-3 rounded-md text-lg font-semibold shadow-md hover:bg-accent-dark transition-all">Login</button>
          </div>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
