import "./SkillList.css"
import SkillListItem from "../SkillListItem/SkillListItem"
export default function SkillList({skills}){

    const skillsListItems = skills.map((skill, idx)=>{
        return(<SkillListItem skill={skill} key={idx} />)
    })
      
    return (
        <ul>
            {skillsListItems}     
        </ul>
       
    )
}