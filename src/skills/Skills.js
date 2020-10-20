import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>MY SKILLS</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicabo"}/>
                    <Skill title={"CSS"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicabo"}/>
                    <Skill title={"React"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicab"}/>
                    </div>
                    <div className={style.skillsTwo}>
                    <Skill title={"REDUX"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicabo"}/>
                    <Skill title={"CSS"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicabo"}/>
                    <Skill title={"React"} decription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos esse eum explicab"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;