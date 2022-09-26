import React, { useEffect } from "react"
import "./style.css"
import Meme from "./Meme"

export default function App() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [api, setApi] = React.useState()

  const roll = () => {
    const x = Math.floor(Math.random() * 100);
    const url = api[x].url
    setMeme(prevImage => ({
      ...prevImage, randomImage: url
    }))
  }

  const inputs = (event) => {
    setMeme({
      ...meme, [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`).then(response => response.json()).then(data => setApi(data.data.memes))
  }, [meme])

  const [show, setShow] = React.useState(true)

  const toggleButton = () => {
    setShow(prevShow => !prevShow)
  }

  return(

    <>
    <div className="form">

    <h1>Create your meme</h1>

    <div className="inputs">
      <input name="topText" type="text" placeholder="top text" onChange={inputs} value={meme.topText}/>
      <input name="bottomText" type="text" placeholder="bottom text" onChange={inputs} value={meme.bottomText}/>
    </div>

    <button onClick={roll}>Generate different image</button>

    <div className="wrapper">
      <img className="image" src={meme.randomImage}/>
      <p className="top">{meme.topText}</p>
      <p className="bot">{meme.bottomText}</p>
    </div>
      
    </div>

    <div className="width">
      <button onClick={toggleButton}>toggle</button>
      {show && <Meme />}
    </div>
    </>

  )
}

