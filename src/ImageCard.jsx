// Image Card Code

import React from 'react'
import './style.css'

const ImageCard = (props) => {
    if(props.images.length == 0){
      return <div style={{fontSize: "2rem" , textAlign: "center"}}> No Images Found!!!</div>
    }
  return (
    <>
     <div className='imageCard-container'>
      {/* Using slice method to show only 18 number of images by limiting data */}
        {props.images.slice(0, 18).map((imageData)=>(
            <div className="images-container" key={imageData.id}>
              <img key={imageData.id} src={imageData.webformatURL} alt={imageData.tags} className='imageCard'/>
            </div>
        ))}
     </div>
    </>
  )
}

export default ImageCard