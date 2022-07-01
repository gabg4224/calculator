import React from "react";
import "../styleSheet/Button.css"

function Button(props){

    const isOperator = value =>{
        return isNaN(value) && (value!==".")&& (value!== "=")
    }
    return(
<div className={`buttonContainer ${isOperator(props.children) ? 'operator':""}`.trimEnd()}
onClick = {()=>props.clickController(props.children)}
>
    {props.children}
</div>
    );
}

export default Button