import React from 'react'
import cl from "./myModel.module.css"

const MyModel = ({children,visible, setVisible}) => {
    let rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div onClick={e => setVisible(!visible) } className={rootClasses.join(" ")}>
            <div onClick={e => e.stopPropagation()} className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}

export default MyModel