import React from "react";
import {NavLink} from "react-router-dom";
import style from './css/success.module.css'

const SuccessfulRegistration = () => {
    return (
        <div className={style.successPage}>
            <div className={style.successPageItem}>You are registered!</div>
            <h1>Thank you!</h1>
            <NavLink className={style.successBtn} to={'/announcement'}>To the list of announcements</NavLink>
        </div>
    )
}

export default SuccessfulRegistration
