import './style.css'
import React, { useEffect } from 'react'
 
export default function Meme(){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    return(

        <div>

            <p>Width: {windowWidth}</p>

        </div>

    )

}