import React from 'react'
import Navbar from"./NavBar2"
import speaker_header from "./images/speaker_header.png"
import CustomCarousel from './CustomCarousel'
// import rbt from "./images/speakers/speaker2.png"

const Speaker = () => {
    const speakers = [
        {
            key : 1,
            image :"/speakers/speaker1.png"
        },
        {
            key:2,
            image :"/speakers/speaker2.png"
        },
        {
            key:3,
            image :"/speakers/speaker3.png"
        },
        {
            key:4,
            image :"/speakers/speaker4.png"
        },
        // {
        //     key:5,
        //     image :"/speakers/speaker5.png"
        // }
    ]
  return (
    <div className='' style={{backgroundColor: 'rgb(2,0,33)'}}>
        <Navbar></Navbar>
        <img src = {speaker_header} className="md:w-[1920px] md:h-[314px] mt-[56px] h-[110px]"></img>
        {/* <div className='md:grid md:grid-cols-4 mx-auto items-center justify-center origin-center'>
            {speakers.map((speakers , _i) => {
                return(
                <div classname="felx justify-center items-center">
                    <div classname = "w-40 h-40 r0unded-full hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                        <img src = {speakers.image} className= "w-[300px] h-[300px] rounded-full hover:scale-125 hover:transition ease-in-out delay-150 m-10"></img>
                        {console.log(speakers.image)}
                    </div>
                </div>)
            })}

        </div> */}
    <CustomCarousel></CustomCarousel>
    </div>
    
  )
}

export default Speaker