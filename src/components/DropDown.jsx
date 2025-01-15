import { useState } from "react"


const DropDown = ({options, onChange, value}) => {

    const [isOpen, setIsOpen] = useState(false);
    

    const handleClick = ()=>{
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (selectedItem)=>{
        
        onChange(selectedItem);
        console.log(selectedItem);
        
        setIsOpen(false)
        
    }

    const renderedOptions = options.map((item)=>{
        return (
            <div className="cursor-pointer hover:bg-blue-300 rounded" onClick={()=>handleOptionClick(item)} key={item.age}>{item.name}</div>
        )
    })


  return (
    <div className="text-start border w-32 mt-8 cursor-pointer">
        <div className="border " onClick={handleClick}>
            {value?.name || 'Select...'}
        </div>
        {isOpen && renderedOptions}
    </div>
  )
}

export default DropDown