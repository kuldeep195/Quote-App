import React,{useState,useEffect,useRef} from 'react';
import "./App.css";
import Bookmark from './Bookmark';
import { Link } from 'react-router-dom';


const App = () => {

  const [quotes,setQuotes] = useState('');
  const textRef = useRef();
  let colors =["#ffff00","#90ee90","#ff68ff","#a9a9e7","#ffa500"]
 
  const addbookmark = ()=> {
    localStorage.setItem(quotes.author,quotes.text)

  }
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data)  => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
  };
  useEffect(() =>{
    getQuote();
  },[]);


   useEffect(() =>{
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)];
   },[quotes]);
  return (
    <>
    <div className='header'>
         
           <Link to="/">Home</Link>
         <Link to="/bookmark">Bookmark </Link>
           </div>
           
        
      

    <div className='App'>
  
<div className='quotes'>
  <p ref={textRef}>{quotes.text}</p>
  {/* <p>{quotes.text}</p> */}
  <p>Author:{quotes.author}</p>
  <div className='btnContainer'>
    <button  onClick={getQuote}className='btn'>Get next quote</button>
    <button   onClick={addbookmark}className='btn'><i className="fa-solid fa-bookmark"></i> </button>
    <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
    target="_blank"
    rel='noopener noreferrer'
    className="btn">Tweet</a>

  </div>
   
</div>
    </div>
    </>
  )
}

export default App;
