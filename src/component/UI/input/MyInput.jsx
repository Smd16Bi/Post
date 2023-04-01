import React from "react";
import style from "./myInput.module.css"

const MyInput = ({ children, ...props }) => {
    return (
        <input className={style.myInput} type="text" {...props} />
    )

}

export default MyInput