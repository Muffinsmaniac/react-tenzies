import {useState} from "react"
import Die from "./components/Die.tsx"

type Die ={  
  value:number,
  isHeld:boolean  
}

export default function App(){ 

  const [dice, setDice] = useState<Die[]>(generateAllNewDice);
  

    function generateAllNewDice():Die[]{
        const numberArray:Die[] = [];
        for(let i = 0; i< 10; i++){            
          numberArray.push({
            value: Math.floor(Math.random() *6 )+ 1,
            isHeld:true            
          })
        }        
        return numberArray;
    }
    
    const diceComponents:React.JSX.Element[] = dice.map((die) =>
      <Die        
        value={die.value}
        isHeld={die.isHeld}/>)
    
    function rollDice(){
        setDice(generateAllNewDice)
    }

    return(
        <main>
            <div className="die-container">
                {diceComponents}
            </div>
            <button id="roll-button" onClick={rollDice}>Roll</button>
        </main>
    )

}