interface EducationProps {
    degree: string;
    honor: string;
    university: string;
    address: string;
    year_span: string;
  }
  
  const Education: React.FC<EducationProps> = ({ degree, honor, university, address, year_span }) => {
    return (
      <div className="border-teal-600 border-[2px] rounded-[20px] p-2 m-1 bg-white text-justify">
        <h3 className="text-[1.3rem] font-bold text-teal-600">{degree}</h3>
        <p className="text-[1rem] font-semibold text-teal-600 m-0">
          {honor}
        </p>
        <p className="text-[1rem] font-medium italic">
          {university}
        </p>
        <p className="italic">
          {address}
        </p>
        <p className="italic">
          <strong>{year_span}</strong>
        </p>
      </div>
    );
  };
  
  export default Education;
  