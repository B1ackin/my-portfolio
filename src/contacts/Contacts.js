import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.portfolio}>
            <div className= {`${styleContainer.container} ${style.portfolioContainer}`}>
            <h2 className={style.title}>Project</h2>
            <div className={style.project}>


            </div>


            </div>
        </div>
    );
}

export default Contacts;