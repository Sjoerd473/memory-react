import { useState } from "react";
import { PropTypes} from 'prop-types'
import Card from "./card.jsx";

import { cards } from "./images.jsx";

export default function Board({reset, increaseScore, endRound}) {
    const [positions, setPositions] = useState(
        cards.map((data, index) => index))
    

    const shuffle = (array) =>{
		let shuffledArray = array.slice(0);
		for (let i = 0; i < shuffledArray.length; i++) {
			const j = Math.floor(Math.random() * shuffledArray.length);
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

    

    const randomize = () =>{
        setPositions(shuffle(positions))
    }
  

  
  return(
<div className="board">
    {positions.map((position) =>{
        return (
           
            <Card
    key={cards[position].name} 
    url={cards[position].image}
    name={cards[position].name}
    reset={reset}
    increaseScore={increaseScore}
    endRound={endRound}
    randomize={randomize} 
     />
     
        )
    })}
    </div>
  ) 
}

Board.propTypes ={
    reset: PropTypes.bool,
    endRound: PropTypes.func,
    increaseScore: PropTypes.func
}


