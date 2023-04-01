import React from "react"
import style from "./MySelect.module.css"

const MySelect = ({ options, defaultValue, value, onChange }) => {
    let option = options.map((el) => {
        return (
            <option key={el.value} value={el.value}>{el.name}</option>
        )
    })
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled >{defaultValue}</option>
            {option}
        </select>
    )
}

export default MySelect