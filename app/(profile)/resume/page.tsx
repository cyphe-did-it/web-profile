import Education from "@/app/components/Education";
import Exposure from "@/app/components/Exposure";


const Resume = () => {
  return (
    <div className=" lg:w-[100%]   lg:rounded-[20px]">
      <div className='p-4'>
        <div className="flex flex-wrap flex-col w-[368px] lg:w-[100%] gap-1">
          <div className="text-start text-[1.8rem] text-teal-600 font-extrabold p-1 hover:underline hover:underline-offset-6">
            Education
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <div className="lg:col-span-1">
              <Education degree="BS in Computer Engineering" honor="Cum Laude" university="University of Southern Mindanao - Main" address="Kabacan, Cotabato, Philippines" year_span="2019-2023"/>
            </div>
            
            <div className="lg:col-span-1">
              <Education degree="Humanities and Social Science" honor="with High Honors" university="Takepan Senior High School" address="Takepan, Pikit, Cotabato, Philippines" year_span="2017-2019"/>
            </div>
            
          </div>
          
        
          
        </div>

        <div>
          <div className="text-start text-[1.8rem] text-teal-600 font-extrabold p-1 hover:underline hover:underline-offset-6">
              Exposure
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <Exposure title="Junior Web Developer/Intern" company="Mightic IT Solutions" span="November - December, 2024" description="- Trained to develop a web application for local and international businesses." address="Sandawa, Kidapawan City" />

            <Exposure title="Intern" company="College of Engineering and Information Technology" span="February - July 2023" description="- Utilized Cisco Packet Tracer to simulate and test a network systems." address="University of Southern Mindanao, Kabacan, Cotabato"></Exposure>
          </div>

        </div> 
        <div>
          <div className="text-start text-[1.8rem] text-teal-600 font-extrabold p-1 hover:underline hover:underline-offset-6">
              Experience
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <Exposure title="Financial Partner Relation Officer" company="CARD Pioneer Microinsurance Inc" span="July - November 2024" description="- Manage, monitor, and liquidate provincial sales." address="Kidapawan City"/>
            <Exposure title="Underwriting Partner Relation Officer" company="CARD Pioneer Microinsurance Inc" span="April - July 2024" description="- Encode principal information on company database and monitor company documents." address="Kidapawan City"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;