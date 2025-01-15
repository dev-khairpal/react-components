import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ items }) => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (nextIndex) => {
    setExpanded(nextIndex);
    if(nextIndex===expanded){
      setExpanded(null)
    }
  };


  return (
    <div>
      {items.map((item, index)=>{
        const isExpanded = expanded === index;
        return (
          <div key={item.id} className="w-[50%] text-start p-4 border">
            <h3 className="bg-gay-200 flex gap-4 p-4 items-center cursor-pointer justify-between"
             onClick={()=>handleClick(index)}>{item.label}
            <span>{isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </h3>
            {isExpanded ? <div>{item.content}</div>: null}
          </div>
        )
      })}
    </div>
  );
};

export default Accordion;
