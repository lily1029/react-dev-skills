import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading/Heading'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'
import Line from './Line/Line'

const initialState = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialState)

  function createNewSkill(newSkill){
    setSkills([...skills, newSkill])
  }
  

  return (
    <div className='App'>
      <Heading />
      <SkillList skills={skills} />
      <Line />
      <NewSkillForm createNewSkill={createNewSkill}/>


    </div>
    
  )
}

export default App
