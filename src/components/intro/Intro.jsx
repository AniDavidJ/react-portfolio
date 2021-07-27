import "./intro.scss"
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

const Intro = () => {

    const textRef = useRef();
useEffect(()=> {
    init(textRef.current, { showCursor: true, 
        backDelay:1500,
        backspeed:60,
        strings: ['Designer', 'Moblie','Web' ] })
},[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQEpe5CIAfmT3Q/profile-displayphoto-shrink_800_800/0/1566708176267?e=1632960000&v=beta&t=PxIPYnHZX7Jj5hhwjdZdKgUXqkOq18ofIHCM2g7tyX8" 
                    alt="" />
                </div>
            </div>
            <div className="right">
                
                <div className="wrapper">
                    <h1>Hi There, I'm</h1>
                    <h2>Ani David</h2>
                    <h3>Developer <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreRoundedIcon className="icon" fontSize="small"/>
                </a>
            </div>
        </div>
    )
}

export default Intro
