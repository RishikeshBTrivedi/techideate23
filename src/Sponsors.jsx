import React from 'react'
import Nav from './NavBar2'
import sponsors_header2 from "./images/sponsors_header2.png"
function Sponsors() {
  const sponsors = [
    {
      key:1,
      image:"/Sponsors/spons1.png"
    },
    {
      key:2,
      image:"/Sponsors/spons2.png"
    },
    {
      key:3,
      image:"/Sponsors/spons3.png"
    },
    {
      key:4,
      image:"/Sponsors/spons4.png"
    },
    {
      key:5,
      image:"/Sponsors/spons5.png"
    },
    {
      key:6,
      image:"/Sponsors/spons6.png"
    },
    {
      key:7,
      image:"/Sponsors/spons7.png"
    },
    {
      key:8,
      image:"/Sponsors/spons8.png"
    },
    {
      key:9,
      image:"/Sponsors/spons9.png"
    },
    {
      key:10,
      image:"/Sponsors/spons10.png"
    },
    {
      key:11,
      image:"/Sponsors/spons11.png"
    },
    {
      key:12,
      image:"/Sponsors/spons12.png"
    },
    {
      key:13,
      image:"/Sponsors/spons13.png"
    },
    {
      key:14,
      image:"/Sponsors/spons14.png"
    },
    {
      key:15,
      image:"/Sponsors/spons15.png"
    },
  ]
  return (
    <div className=""style={{backgroundColor:"rgb(41,20,56)"}}>
    <Nav/>
    {/* <img src = ""></img> */}
    <img src = {sponsors_header2} className="md:w-[1920px] md:h-[314px] h-[110px]"></img>
        <div class="md:grid md:grid-cols-3 gap-4 justify-center items-center origin-center mx-auto" style={{backgroundColor:"rgb(41,20,56)"}}>
          {
            sponsors.map((spons , _i) =>{
              return(
                <div key = {_i}className='justify-center items-center mx-auto p-10'>
                  <img src = {spons.image}
                  // style={{ filter: 'brightness(0) invert(1)' }}
                  className="w-40 m-5 mx-auto"
                  ></img>
                </div>
              )
            })
          }
            
        
            
</div>
    </div>
  )
}

export default Sponsors