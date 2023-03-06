import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import image1 from "./images/Events/image-1.jpg"
import image2 from "./images/Events/image-2.png"
import image3 from "./images/Events/image-3.jpg"
import image4 from "./images/Events/image-4.jpg"
import image5 from "./images/Events/image-5.jpeg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./events.css"
import NavBar2 from './NavBar2';
import Navbar from "./Navbar"
const Events = () => {
  return (
    <div className="eventsPage">
      <NavBar2/>
      <div className="">
        <Carousel
          autoPlay
          infiniteLoop
          interval="2000"
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <div className="w-screen h-screen">
            {/* <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/darshanrawal.jpg"
              alt="banner 3"
            /> */}
            <img src={image1} alt="" layout = "fill" objectFit="cover" loading="lazy" className='image'/>
            <div className=" events_content absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    ROBOWARS
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      18th March
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-xl ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum, quod culpa quos sed eveniet quis earum dolorem delectus porro unde perspiciatis dolores consequuntur non vitae hic tempore exercitationem aut.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-screen md:h-screen">
            {/* <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/aerreo3.jpg"
              alt="banner 3"
            /> */}
            <img src={image2} alt="" className='image'/>
            <div className="events_content absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    HACKITUP
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      19th March
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left md:text-xl events_content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quaerat totam facere, optio cum nesciunt maxime error quidem numquam beatae maiores suscipit iste, similique vero vitae vel veniam illo repellendus.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen">
            {/* <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/navjot.jpg"
              alt="banner 3"
            /> */}
            <img src={image3} alt=""className='image' />
            <div className="events_content absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    LIVE WORKSHOPS
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      20th March
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-2xl events_content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis qui quo, velit molestiae sapiente reprehenderit aut fugit blanditiis eligendi quos ad magni praesentium illum accusamus dicta provident harum cumque.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen">
            {/* <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/navjot.jpg"
              alt="banner 3"
            /> */}
            <img src={image5} alt="" className='image'/>
            <div className="events_content absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    BULLCHAMP
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      21st March
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-2xl events_content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis qui quo, velit molestiae sapiente reprehenderit aut fugit blanditiis eligendi quos ad magni praesentium illum accusamus dicta provident harum cumque.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen">
            {/* <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/navjot.jpg"
              alt="banner 3"
            /> */}
            <img src={image4} alt="" className='image'/>
            <div className="events_content absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    DESIGNATHON
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      20th March
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-2xl events_content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis qui quo, velit molestiae sapiente reprehenderit aut fugit blanditiis eligendi quos ad magni praesentium illum accusamus dicta provident harum cumque.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Events