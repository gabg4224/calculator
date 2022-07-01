import "../styleSheet/ButtonClear.css"

const ButtonClear = (props)=>(
    <div className="clear"
    onClick={props.clickController}>
        {props.children}

    </div>
)

export default ButtonClear