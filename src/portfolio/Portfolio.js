import React from 'react';
import style from "./Portfolio.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Project from "./portfolio-project/PortfolioProject";


function Portfolio() {
    return (
        <div className={style.portfolio}>
            <div className= {`${styleContainer.container} ${style.portfolioContainer}`}>
            <h2 className={style.title}>Project</h2>
            <div className={style.project}>
                <Project/>
                <Project/>

            </div>


            </div>
        </div>
    );
}

export default Portfolio;