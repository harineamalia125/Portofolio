import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/23231-5-one-piece-chibi-image.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello Nakama!</h2>
                    <h1>Welcome to Straw Hat Fleet</h1>
                    <h3>Let's <span>begin our journey!</span></h3>
                </div>
                <a href="#character">
                    <img src="assets/icons8-expand-arrow-100.png" alt=""/>
                 </a>
            </div>
        </div>
    )
}
