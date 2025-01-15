import { useState } from "react";
import "./App.css";
import AccordionPage from "./pages/AccordionPage";
import ButtonsPage from "./pages/ButtonsPage";
import DropDownPage from "./pages/DropDownPage";
import ModalPage from "./pages/ModalPage";

function App() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option)=>{
    
    setSelected(option)
  }
  
  return (
    <>
    <ModalPage />
      <ButtonsPage />
      <AccordionPage />
      <DropDownPage value={selected} onChange={handleSelect} />
    </>
  );
}

export default App;
