import React from 'react';
import "./Quote.css";
function Quote({data}) {
  return (
    <div className='Container'>
      <div className='Content'>{data.content}</div>
      <div className='author'>{data.author}</div>
      
    
    </div>
  )
}

export default Quote;
