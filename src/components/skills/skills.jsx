import React, { useState } from 'react';
import Skillchart from '../skillchart/skillchart';
import RelatedProjects from '../related-projects/related-projects';
import Tilt from 'react-tilt';
import './skills.css';

function Skills(props) {

    const [selectedSkillId, setSelectedSkillId] = useState(0);
    const handleSkillSelected = (skillId) => setSelectedSkillId(skillId)
    
    return (
        <section className="skills">
            <h2 className="skills__header">Skills</h2>

            <div className="skills__content">
                <div className="skills__left">
                    <Tilt className="Tilt" options={{ max : 10, scale: 1.02 }} >
                        <Skillchart onSkillSelected={handleSkillSelected} />
                    </Tilt> 
                </div>

                <div className="skills__right">
                    <RelatedProjects skillId={selectedSkillId} />
                </div>
            </div>

            <p className="related-projects__hide-sm" style={{marginTop: "10vh"}}>You can select a skill to see a list of related projects</p>

            {props.children}
        </section>
    );
}

export default Skills;
