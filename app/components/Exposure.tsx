interface EducationProps {
    title: string;
    company: string;
    span: string;
    description: string;
    address: string
  }
  
  const Education: React.FC<EducationProps> = ({ title, company, span, description, address }) => {
    return (
      <div className="border-teal-600 border-[2px] rounded-[20px] p-2 m-1 bg-white text-justify">
        <h3 className="text-[1.3rem] font-bold text-teal-600">{title}</h3>
        <p className="text-[1rem] font-semibold text-teal-600 m-0">
          {company}
        </p>
        <p className="italic">
          {address}
        </p>
      
        <div className="text-[.9rem] italic">
          <ul className="list">
            <li>{description}</li>
           </ul>
        </div>

        <p className="italic font-bold">
          {span}
        </p>
      </div>
    );
  };
  
  export default Education;
  