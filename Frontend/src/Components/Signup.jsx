import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
function Signup() {
  const location=useLocation()
  const navigate = useNavigate()
  const form=location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Successfully !');
        navigate(form, {replace : true });
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
     if(err.response){
      console.log(err)
      toast.error('User already exit!');
     }
    })
  };



  return (
    <>
    <div>
    <div id="my_modal_3" className="flex h-screen items-center justify-center">
  <div className="w-[450px]">
    <div className='modal-box'>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text"
        placeholder='Enter your Fullname'
        className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("fullname", { required: true })} 
        />
          {errors.fullname && <span className='text-lg pl-5 text-red-500'>*</span>}

    </div>
    <div className='mt-4 space-y-2'>
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
    <div className='mt-4 space-y-2'>
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
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-700'>
            Signup  </button>
        <p>Have account {" "}
        <a href="/" className='underline text-blue-700 cursor-pointer'> Login </a>
        </p>
    </div>
    </form>
  </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Signup
