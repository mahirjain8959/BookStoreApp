import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json" 
import Card from './Card';
import axios from 'axios';
function Freebook() {
 const[book ,setBook] = useState([]);
 useEffect(() =>{
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
 },[])
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);
  return (
    <>  
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div>
      <h1 className="font-semibold text-xl pd-2">Free Offered Courses</h1>
      <p className="mt-2 mb-3"> "Ek zabardast moka apke liye! Hamari book store app par apni pehli kitab bilkul
       free mein hasil karein. Apni pasand ke genre ko explore karein aur bina kisi cost ke reading ka lutf
      uthayein. Abhi download karein, apna free book claim karein, aur gyaan ki duniya mein kho jaiye!"</p>
      </div>
      <div>
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Card item={item} key={item.id} />
       ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
