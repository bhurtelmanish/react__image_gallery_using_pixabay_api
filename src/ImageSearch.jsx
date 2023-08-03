// Image Search Code

import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './style.css'
import ImageCard from './ImageCard'

const ImageSearch = () => {
    const [images , setimages] = useState([])
    const [searchTerm , setsearchTerm] = useState("")
    const [loading , setloading] = useState(false)
    const getImages = () => {
        axios
          .get(`https://pixabay.com/api/?key=38569412-a40096df86f4bb51fd2bf90cf&q=${searchTerm}&image_type=all&colors=all&order=popular`)
          .then((res) => {
            setloading(true);
              setimages(res.data.hits);
              setloading(false); // Set loading to false after images are fetched
          })
          .catch((err) => {
            console.error(err);
            setloading(false); // Set loading to false in case of an error
          });
      };
    useEffect(getImages , [searchTerm])
    if(loading){
        setloading(true);
        return <div>Loading...</div>
    }

  return (
    <>
    <div className='contents-container'>
      <input 
        onChange={(e)=>{
            setsearchTerm(e.target.value);
        }} 
        type="text" 
        name="search"  
        className='searchField' 
        placeholder='Search Images here...'
      />
      <button className='button' type='button'>Show Images</button>
    </div>
      <ImageCard images={images}/>
    </>
  )
}

export default ImageSearch