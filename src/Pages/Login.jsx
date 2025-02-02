import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import animation2 from '../../public/lottie/Animation2.json'
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {signIn,googleSignIn,setUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
      const handleGoogleSignIn=async ()=>{
        try{
            const result=await googleSignIn()
        const user=result.user
        setUser(user)
        console.log(user)
        toast.success("User Login Successful")
        setTimeout(()=>{
            navigate("/")
        },1000)
        }catch(err){
            console.log(err)
            toast.error(err?.message)
        }
      }
    
      const onSubmit = (data) => {
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            setTimeout(()=>{
               navigate('/') 
            },1000)
            toast.success("user login successful")
        })
      }
  return (
    <div className="flex justify-center  md:flex-row  flex-col min-h-screen items-center px-3">
         <div>
           <Lottie className="md:h-[400px] md:w-[400px] h-[150px] w-[150px]" animationData={animation2}></Lottie>
        </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-2xl font-bold text-center pt-10">Login Now</h1>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email",{required:"Email is Required"})}
              type="email"
              placeholder="email"
              className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
             
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
             {...register("password",{required:"Password is required"})}
              type="password"
              placeholder="password"
              className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            
          </div>
          <div className="form-control mt-6 ">
            <button className="btn btn-accent w-full py-3 rounded-md text-lg font-semibold shadow-md hover:bg-accent-dark transition-all">Login</button>
          </div>
          <p className="text-center pt-3 mb-3"><small>Don't have an account</small><Link className="text-red-500 ml-1" to='/register'>Register now</Link></p>
          <div className="divider">OR</div>
          <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline btn-accent "><FaGoogle size={20}/></button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
