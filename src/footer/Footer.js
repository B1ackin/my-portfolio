import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";



function Footer() {
    return (
        <div className={style.footer}>
            <div className= {`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Leonid Kruchanok</h2>
            <div className={style.social}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
                <h3>Все права защищены</h3>

            </div>
        </div>
    );
}

export default Footer;