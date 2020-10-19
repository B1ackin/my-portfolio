import React from 'react';
import style from "./PortfolioProject.module.css"



function Project() {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.text}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
            </div>
        </div>
    );
}

export default Project;