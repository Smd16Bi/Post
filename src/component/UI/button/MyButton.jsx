import React from "react";
import style from "./mybutton.module.css"

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={style.myBtn}>{children}</button>
    )

}

export default MyButton