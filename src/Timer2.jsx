import React from 'react'
import FlipCountdown from "@rumess/react-flip-countdown";
const Timer2 = () => {
  return (
    <div className="">
      <div
        // style={{ backgroundImage:  }}
        className="h-[75vh] bg-cover flex justify-center items-center h-screen">
        <div className="font-bold text-white tracking-widest text-center" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
          <h1 className="md:text-3xl text-xl tracking-[10px] mb-20 text-[#F2F2F2]">COMING SOON</h1>
          <div className="text=[#8486A9]">
            <FlipCountdown
              hideYear
              hideMonth
              theme='dark'
              size='large'
              titlePosition='bottom'

              endAt={new Date(
                Date.now() +
                1000 /* sec */ *
                60 /* min */ *
                9/* hour */ *
                10 /* day */ *
                100 /* month */ *
                10/* year */ *
                10
              ).toUTCString()}
              dayTitle='DAYS'
              hourTitle='HOURS'
              minuteTitle='MINUTES'
              secondTitle='SECONDS'
            />
          </div>
        </div>
      </div >
      <div style={{}} className="md:h-[35vh]bg-no-repeat bg-cover flex justify-center items-center">
        <div className="flex gap-x-4 text-[#8486A9]">
          <div>
            <i className="fa-brands fa-square-facebook text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all  duration-500"></i>
          </div>
          <div>
            <i className="fa-brands fa-pinterest text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all transform duration-500"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all transform duration-500"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer2