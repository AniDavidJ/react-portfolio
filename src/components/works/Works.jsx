import "./works.scss";
import { useState } from "react";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            // icon: moblie,
            title: "Web",
            desc: "Lorem Ipsum is simply  ",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            // icon: globe,
            title: "Mobile",
            desc: "Lorem Ipsum is simply ",
            img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            // icon: writing,
            title: "Branding",
            desc: "Lorem Ipsum is simply ",
            img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide+ 1 :0)
    }
    return (
        <div className="works" id="works">

<div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
            {data.map((dtitem) => (
                <div className="container ">
                    <div className="item " >
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgConatainer">
                                    {/* <img src={dt.icon} alt="" /> */}
                                </div>
                                <h2>{dtitem.title}</h2>
                                <p>{dtitem.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <ArrowForwardIosRoundedIcon className="arrow right" onClick={()=>handleClick("left")}/>

            <ArrowForwardIosRoundedIcon className="arrow left" onClick={()=>handleClick()}/>
            {/* <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        
      /> */}
      {/* <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        
      /> */}
        </div>
    );
};

export default Works;
