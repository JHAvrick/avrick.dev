import React, { useState } from 'react';
import './skillchart.css';
import './skillbar.css';
import SkillList from '../skills';

const barColors = ["#8FF2FF", "#46ADFF", "#3A59FE", "#631CFC", "#7E1AFF", "#9E00FF", "#EB00FF", "#FF0099", "#FF9900", "#FF5C00", "#FF005C", "#FF0000"];

function Skillchart(props) {
  const [selected, setSelected] = useState(0);
  const handleSkillSelected = (id) => {
    setSelected(id);
    props.onSkillSelected(id);
  } 
  
  return (
      <ul className="skillchart">
        <div initial={{height:0}} animate={{height:365}} transition={{duration: 1}} className="skillchart__line"></div>
        {SkillList.map((skill, index) => 
          <Skillbar 
            id={index} 
            onClick={handleSkillSelected} 
            selected={selected} 
            label={skill.label} 
            percentage={skill.percentage} 
            tools={skill.tools} 
            color={barColors[index]}
            />
        )}
      </ul>
  );
}

function Skillbar(props){
  return (
    <li className="skillbar">

      <span className="skillbar__label" style={{
        color: props.selected === props.id ? "var(--fc-lime)" : "var(--fc-primary)",
        opacity: props.selected === props.id ? 1 : 0.8,
      }}>
        {props.label}
      </span>

      <span 
        className={props.selected === props.id ? "skillbar__bar--selected" : "skillbar__bar"} 
        onClick={() => props.onClick(props.id)}
        style={{
          width: (250 * props.percentage) + "px", 
          background: props.color 
        }}>
      </span>
      
      {/* List out all the skills w/ a comma inbetween */}
      <span className="skillbar__description" style={{
          color: props.selected === props.id ? "var(--fc-lime)" : "var(--fc-primary)",
          opacity: props.selected === props.id ? 1 : 0.8,
      }}> 
        { props.tools.map((tool, index) => index === props.tools.length - 1 ? tool : tool + ", " ) } 
      </span>
    </li>
  );
}

export default Skillchart;
