import React from "react"

export default function Count(props){

    const [boxx, setBox] = React.useState(props.on)

    const style = {
        backgroundColor: props.on ? "black":"white"
    }

    function toggle(){
        setBox(prevBox => !prevBox)
    }

    return(

        <div className="item" style={style} onClick={toggle}></div>

    )

}