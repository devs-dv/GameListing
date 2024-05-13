import React, { useState,useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = () => {

    const [genreList,setGenreList] =useState([])
    const[activeIndex,setActiveIndex] =useState(0)
    useEffect(()=>{
        getGenreList();

    },[])
const getGenreList = ()=>{
    GlobalApi.getGenreList.then((resp) =>{
        console.log(resp.data.results);
        setGenreList(resp.data.results);

    })
}
  return (
    <div>
      <h2 className="text-{30px} font-bold dark:text-white">Genre</h2>
      {genreList.map((item,index) => (
        <div className="flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2  group rounded-xl hover:dark:bg-gray-600">
          <img
            src={item.image_background}
            className="w-[40ox] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all  ease-in duration-300 "
          />
          <h3 className=" dark:text-white text-[18px] font-semibold group-hover:font-bold transition-all  ease-in duration-300 ">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
