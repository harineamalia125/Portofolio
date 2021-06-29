import "./characterlist.scss"

export default function CharacterList({id, title, active, setSelected}) {
    return (
        <li className={active ? "characterlist active" : "characterlist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
