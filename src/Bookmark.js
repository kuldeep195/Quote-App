import { useState,useEffect } from "react";
import React from 'react';
import Quote from "./Quote";

const Bookmark = () => {
 const [bookmark,setBookmark] = useState([]);;
    const getBookmark = () =>{
        
var i = 0,
    oJson = {},
    sKey;
for (; sKey = window.localStorage.key(i); i++) {
    oJson[sKey] = window.localStorage.getItem(sKey);
 
    const obj = {author:sKey,content:oJson[sKey]}
    setBookmark((p)=>{
        return[...p,obj];
    });
}

console.log(oJson);


    }
    useEffect(() =>{
    getBookmark();
  },[]);
  return (

    <div>{bookmark.map((val,ind)=>{
        return <Quote data={val} key={ind}/>
    })}</div>
  )
}

export default Bookmark;