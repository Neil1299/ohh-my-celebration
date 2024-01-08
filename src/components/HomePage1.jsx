import React, { useEffect, useState } from 'react'
import img1 from '../assets/cake1.avif';
import img2 from '../assets/cake2.avif';
import img3 from '../assets/cake3.avif';
import img4 from '../assets/cake4.avif';
import img5 from '../assets/cake5.avif';
import img6 from '../assets/cake5.avif';
import img7 from '../assets/cake6.avif';
import img8 from '../assets/cake8.avif';
import img9 from '../assets/giftbox1.avif';
import img10 from '../assets/indoor plant1.avif';
import img11 from '../assets/plant2.avif';
import img12 from '../assets/rose.avif'
import img13 from '../assets/tadday.avif'
import img14 from '../assets/tadday2.avif'

const HomePage1 = () => {
    const imgArray =[img1,img2,img3,img14,img4,img5,img13,img6,img7,img8,img9,img10,img11,img12]
    const [currentImage,setCurrentImage]=useState(0);

    useEffect(()=>{
         setTimeout(()=>{
            if (currentImage == (imgArray.length-1)) {
                setCurrentImage(0);
              }else
            setCurrentImage(currentImage + 1);
        },2000);
    

    },[currentImage])
  return (
    <div className='container-fluid min-vh-50'>
          <img style={{height:"100vh",width:"100%"}} src={imgArray[currentImage]} alt="" />
    </div>
  )
}

export default HomePage1
