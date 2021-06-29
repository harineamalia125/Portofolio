import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Arc from "./components/arcs/Arc";
import Character from "./components/characters/Character";
import Producer from "./components/producers/Producer";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Character/>
        <Arc/>
        <Producer/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
