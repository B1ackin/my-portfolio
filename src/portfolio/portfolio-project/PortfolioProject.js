import React from 'react';
import style from "./PortfolioProject.module.css"



function Project() {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.text}>
                <div>Название проекта</div>
                <div>Краткое описание</div>
            </div>
        </div>
    );
}

export default Project;