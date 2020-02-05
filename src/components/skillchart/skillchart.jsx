import React, { useState } from 'react';
import { motion } from "framer-motion";
import './skillchart.css';
import './skillbar.css';
import SkillList from '../skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

function Skillchart() {
  const [selected, setSelected] = useState(null);
  const handleSkillSelected = (id) => setSelected(id);
  
  return (
      <motion.ul className="skillchart" variants={container} initial="hidden" animate="show" >
        <motion.div initial={{height:0}} animate={{height:365}} transition={{duration: 1}} className="skillchart__line"></motion.div>
          {SkillList.map((skill, index) => 
            <Skillbar 
              id={index} 
              onClick={handleSkillSelected} 
              selected={selected} 
              label={skill.label} 
              percentage={skill.percentage} 
              tools={skill.tools} />
          )}
      </motion.ul>
  );
}

function Skillbar(props){
  return (
    <motion.li variants={item} className="skillbar">
      <span className="skillbar__label">{props.label}</span>

      <span 
        className={props.selected === props.id ? "skillbar__bar--selected" : "skillbar__bar"} 
        onClick={() => props.onClick(props.id)}
        style={{width: (250 * props.percentage) + "px" }}>
      </span>
      
      {/* List out all the skills w/ a comma inbetween */}
      <span className="skillbar__description"> 
        { props.tools.map((tool, index) => index === props.tools.length - 1 ? tool : tool + ", " ) } 
      </span>
    </motion.li>
  );
}

export default Skillchart;
