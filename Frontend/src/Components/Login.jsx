import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfully!');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        }, 3000);
      }
      
    }).catch((err)=>{
     if(err.response){
      console.log(err)
      toast.error('Invalid username or password!');
      setTimeout(() => {}, 1000);
     }
    });
  }
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}
      >✕</a>
      {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
  
    <h3 className="font-bold text-lg ml-16">Login</h3>
    <div className='mt-4 ml-16 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email"
        placeholder='Enter your email'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })} 
        />
         {errors.email && <span className='text-lg pl-5 text-red-500'>*</span>}
    </div>
    {/* //password */}
    <div className='mt-4 ml-16 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text"
        placeholder='Enter your password'
        className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("password", { required: true })} 
        />
         {errors.password && <span className='text-lg pl-5 text-red-500'>*</span>}

    </div>
    {/* button  */}
    <div className='flex justify-around mt-4 '> 
        <button className='bg-pink-500 text-white rounded-md ml-12 px-2 py-1 hover:bg-pink-700 duration-700'>
            Login  </button>
        <p>Not registered {" "}
        <a href="/signup" className='underline text-blue-700 cursor-pointer mr-10'> Signup </a>
        </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
