import { useState } from "react";
import "./arc.scss"

export default function Arc() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "assets/—Pngtree—straw hat  one piece_4976787.png",
            title: "East Blue",
            desc: "The East Blue Saga[1] (“東の海”イースト･ブルー編 isuto buuru Hen) is the introductory saga of the series. Monkey D. Luffy meets Shanks as a young boy living in East Blue.",
            img: "https://afdalstarterblog.files.wordpress.com/2020/03/one-piece-straw-hat-pirates-bounties-1.jpg?w=830"
        },
        {
            id: 2,
            icon: "assets/—Pngtree—straw hat  one piece_4976787.png",
            title: "Water 7",
            desc: "The Water 7 Saga (ウォーターセブン編 Wōtā Sebun Hen?), also known as the World Government Saga or CP9 Saga, is the fourth saga in One Piece",
            img: "https://i1.wp.com/doublesama.com/wp-content/uploads/2018/11/One-Piece-Water-7.jpg?resize=500%2C281"
        },
        {
            id: 3,
            icon: "assets/—Pngtree—straw hat  one piece_4976787.png",
            title: "Summit War",
            desc: "The Summit War Saga (“頂上戦争”編 Chōjō Sensō Hen), also called the Whitebeard War Saga and the Paramount War Saga in the official Viz release, is the sixth saga in the anime and manga series, One Piece",
            img: "http://www.onepiecepodcast.com/wp-content/uploads/2015/08/Screen-Shot-2015-08-07-at-12.42.34-AM-1.jpg"
        },
       
    ];
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="arc" id="arc">
            <div className="slider" style={{transform :`translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d)=>(
                     <div className="container">
                     <div className="item">
                     <div className="left">
                         <div className="leftContainer">
                             <div className="imgContainer">
                                     <img src={d.icon} alt=""/>
                             </div>
                             <h2>{d.title}</h2>
                             <p>{d.desc}</p>
                             <span>Arc</span>
                         </div>
                     </div>
                        <div className="right">
                             <img src={d.img} alt=""/>
                        </div> 
                     </div>
                     ));
                     </div>
                ))}
            </div>
            <img src="assets/icons8-back-100 (1).png"  className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/icons8-back-100 (1).png"  className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}
