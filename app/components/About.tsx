import TypedName from "./TypedName"
const About = () => {

  return (
    <div className="border-[2px]  border-teal-600 text-teal-600 rounded-[20px] m-4 p-4 lg:m-3 lg:p-3">
      <div className="h-[55px] text-[2rem] text-teal-600 font-extrabold">
        <TypedName fullText="Hello! I&apos;m Cyphil..."/>
      </div>
      <div className=" font-medium text-[1.1rem]  text-justify
      lg:text-[1.2rem]">
        <p>
        An aspiring software developer from North Cotabato, Philippines. I&apos;m passionate about creating innovative projects that contribute positively to society. With a strong foundation in web development, data engineering, and IoT innovation, I aim to design solutions that address real-world challenges while continuously growing my skills and expertise in the tech industry. 
        </p>
      </div>
    </div>
    
  )
}

export default About