import React from 'react'
import list from "../../public/list.json" 
import Card from './Card'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center  dark:bg-slate-900 dark:text-white'>
        <h1 className='text-2xl md:text-4xl'>
            We' re delighted to have you {""} 
            <span className='text-pink-500'> Here!!:) </span>  </h1>
        <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ratione optio error vero earum ex magni at vitae fuga. Repellat reprehenderit quia facilis esse libero sequi eaque dolorem, rerum minima praesentium provident, vel nihil sit at a dolore consequuntur impedit illum, alias excepturi totam hic accusamus quisquam qui. Molestiae, recusandae?
        </p>
        <a href="/">
        <button className='bg-pink-500 text-white px-4 py-2 hover:ng-pink-700 duration-300 mt-6'>
            Back
        </button>
        </a>
    
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>    
        {list.map((item) =>(
            <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Course
