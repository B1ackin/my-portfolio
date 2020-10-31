import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.contacts}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.contact}>
                <input className={style.input}></input>
                <input className={style.input}></input>
                <textarea name="" id="" cols="30" rows="10" className={style.input}></textarea>
                <button>Отправить</button>
            </form>


            </div>
        </div>
    );
}

export default Contacts;