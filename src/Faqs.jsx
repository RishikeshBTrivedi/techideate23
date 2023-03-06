import React from 'react';
import Faq from 'react-faq-component';
import Navbar from "./NavBar2"
import Particles from './components/Particles';
// import { motion } from "framer-motion"
import { motion, useScroll } from "framer-motion";
import faq_header from "./images/faq_header_new.png"

export default function Faqs(props) {
    const { scrollYProgress } = useScroll();
  const data = {
    // title: 'Frequently Asked Questions',
    rows: [
      {
        title: 'Which artist will perform at Oneiros 2022?',
        content:
          'The leading light of Oneiros will be announced soon on our social media handles.',
      },
      {
        title: 'Which students are allowed to apply?',
        content:
          'Students from all colleges across the globe are welcome to apply.',
      },
      {
        title: 'What will be the location of the ongoing events?',
        content: `All participants will be informed about the time and location of the relevant events by the corresponding organizers.`,
      },
      {
        title: 'Can I register for multiple events?',
        content: `Yes, you can register for as many events as you want but their timings might overlap.`,
      },
      {
        title: 'What is Oneiros?',
        content: ` Oneiros is the annual cultural fest of Manipal University Jaipur.`,
      },
      {
        title: 'Where will the events be conducted?',
        content: `All events will be conducted inside the University campus.`,
      },
      {
        title: 'Is there any sort of transport facility available?',
        content: `No, make sure to acquire tranport before attending the fest.`,
      },
      {
        title: 'How will the experience of Oneiros be?',
        content: `The experience will be integrating, enriching and fulfilling to say the least. `,
      },
      {
        title: 'In which mode will the events be conducted?',
        content: `All events will be conducted in offline mode.`,
      },
      {
        title: 'What options are available for having meals at Oneiros?',
        content: `There will be abundant food vendours available throughout campus during the fest.`,
      },
      {
        title:
          'Is there a registration fee for participating in events in Oneiros?',
        content: `Refer events tab for more information.`,
      },
    ],
  };
  const styles = {
    bgColor: 'rgb(4,7,19)',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowTitleTextSize: '23px',
    rowContentTextSize:'19px',
    rowContentPaddingTop: '10px',
    rowContentColor: '#c3c8c9',
    arrowColor: 'white',
    rowContentPaddingLeft: '10px',
  
  };
  const stylesMobile = {
    bgColor: 'rgb(2,0,33)',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowTitleTextSize: '20px',
    rowContentTextSize:'18px',
    rowContentPaddingTop: '13px',
    rowContentColor: '#c3c8c9',
    arrowColor: 'white',
  };
  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
  };
  return (
    <div style={{backgroundColor:'rgb(4,7,255)'}}>
        <Navbar></Navbar>
        <img src = {faq_header} className="md:w-[1920px] md:h-[314px] h-[110px]"></img>
    <div className='bg-black justify-center'style={{
          padding: '3% 20%',
          backgroundColor: 'rgb(2,0,33)',
          'box-shadow': '0px -5px 100px rgb(4,7,255)',
        }}>
        {/* <h1 className='text-white font-sans text-3xl text-center p-10' style={{fontSize:"50px"}}>FAQs</h1> */}
         
        <Faq data={data} styles={stylesMobile} config={config}/>
    </div>
    {/* <Particles id="tsparticles" /> */}
    </div>
    
    
  );
}