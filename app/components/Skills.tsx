import Image from "next/image";
const Skills = () => {

    const icons =  [
        {id: 'html', label: 'HTML', src: '/images/icons/html5-icon.png'},
        {id: 'css', label: 'CSS', src: '/images/icons/css-icon.png'},
        {id: 'js', label: 'JavaScript', src: '/images/icons/js-icon.png'},
        {id: 'react', label: 'React', src: '/images/icons/react-icon.png'},
        {id: 'nextjs', label: 'Next.js', src: '/images/icons/nextjs-icon.png'},
        {id: 'php', label: 'PHP', src: '/images/icons/php-icon.png'},
        {id: 'laravel', label: 'Laravel', src: '/images/icons/laravel-icon.png'},
        {id: 'mysql', label: 'MySQL', src: '/images/icons/mysql-icon.png'},
        {id: 'sqlite', label: 'SQLite', src: '/images/icons/sqlite-icon.png'},
        {id: 'firebase', label: 'Firebase', src: '/images/icons/firebase-icon.png'},
        {id: 'python', label: 'Python', src: '/images/icons/python-icon.png'},
        {id: 'arduino', label: 'Arduino', src: '/images/icons/arduino-icon.png'},
        {id: 'powerbi', label: 'Power BI', src: '/images/icons/powerbi-icon.png'},
      ];

  return (
      <div className="m-4 ">
        <div className="text-[2rem] font-extrabold text-teal-600 mb-4">
          <h1>What I can utilize...</h1>
        </div>

        {/* <div className="grid grid-cols-5">
          {icons.map((icon) => (
            <div key={icon.id} className="w-[50px] h-[50px] border-[2px] border-teal-600 rounded-full">
              <Image src={icon.src} key={icon.id} alt={icon.label} width={50} height={50} className="object-cover rounded-full" />
            </div>  
          ))}s
        </div> */}

        <div className="flex flex-wrap gap-3 items-center justify-center ">
          {icons.map((icon) => (
            <div key={icon.id} className="flex flex-row items-center justify-center border-[2px] bg-teal-600 text-white  w-[125px] p-1 gap-1 lg:hover:scale-110 lg:hover:text-teal-600 lg:hover:bg-white lg:hover:border-teal-600 lg:hover:border lg:transform lg:transition-transform lg:duration-300">
              <Image src={icon.src} key={icon.id} alt={icon.label} color="white" width={50} height={50} className="object-fit w-[40px] h-[40px] shadow-md shadow-white" />
              <h1 className="p-1 text-[.9rem]">{icon.label}</h1>
            </div>  
          ))}
        </div>

      </div>
  )
}

export default Skills