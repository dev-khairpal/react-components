import DropDown from "../components/DropDown"

const options = [
    {name:'Dev',age:25},
    {name:'Tanu',age:22}
]

const DropDownPage = ({value, onChange}) => {
  return (
    <div><DropDown options={options} value={value} onChange={onChange}  /></div>
  )
}

export default DropDownPage