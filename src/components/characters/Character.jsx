import "./character.scss"
import CharacterList from "../characterlist/CharacterList"
import { useEffect, useState } from "react"
import { strawCharacter, 
    heartCharacter, 
    familyCharacter, 
    bigmomCharacter, 
    beastCharacter} from "../../data"


export default function Character() {
    const [selected, setSelected] = useState("strawhat");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "strawhat",
            title: "Straw Hat Crew",
        },
        {
            id: "heart",
            title: "Heart Pirate Crew",
        },
        {
            id: "family",
            title: "Donquixote Family",
        },
        {
            id: "bigmom",
            title: "Big Mom Crew",
        },
        {
            id: "beast",
            title: "Beast Pirate Crew",
        }
    ]
    
    useEffect(()=>{
        switch(selected){
            case "strawhat":
                setData(strawCharacter);
                break;
            case "heart":
                setData(heartCharacter);
                break;
            case "family":
                setData(familyCharacter);
                break;
            case "bigmom":
                setData(bigmomCharacter);
                break;
            case "beast":
                setData(beastCharacter);
                break;
                default:
                    setData(strawCharacter)      
        }

    }, [selected])


    return (
        <div className="character" id="character">
            <h1>The Crews</h1>
            <ul>
                {list.map(item=>(
                  <CharacterList title={item.title} 
                  active={selected === item.id} 
                  setSelected={setSelected}
                  id={item.id}
                  />  
                ))};
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
