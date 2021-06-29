import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#character">Character</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#arc">Arcs</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#producer">Producer</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
