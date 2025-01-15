import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const webDevQuestions = [
    { 
      id: 1, 
      label: "What is the difference between Flexbox and CSS Grid?", 
      content: "Flexbox is used for one-dimensional layouts (rows or columns), while CSS Grid is used for two-dimensional layouts (both rows and columns)." 
    },
    { 
      id: 2, 
      label: "What are the advantages of using React.js?", 
      content: "React allows for building reusable UI components, has efficient rendering with the virtual DOM, and provides strong community support." 
    },
    { 
      id: 3, 
      label: "What is the purpose of middleware in Redux?", 
      content: "Middleware in Redux is used to handle side effects like asynchronous actions, logging, and API calls before the action reaches the reducers." 
    },
  ];
    
  return (
    <div><Accordion items={webDevQuestions} /></div>
  )
}

export default AccordionPage