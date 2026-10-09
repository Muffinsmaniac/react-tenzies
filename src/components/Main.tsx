import {useState} from "react"
import Die from "./Die.tsx"

export default function Main(){

    const [dice, setDice] = useState<number[]>(generateAllNewDice);

    function generateAllNewDice():number[]{
        const numberArray:number[] = [];
        for(let i = 0; i< 10; i++){
            numberArray.push(Math.floor(Math.random() *6 ) +1)
        }        
        return numberArray;
    }
    
    const diceComponents:React.JSX.Element[] = dice.map((value) => <Die value={value}/>)
    
    return(
        <main>
            <div className="die-container">
                {diceComponents}
            </div>
            
        </main>
    )

}