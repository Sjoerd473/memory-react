import { useState, useEffect } from 'react'
import { PropTypes} from 'prop-types'



export default function Card({url, name, reset, increaseScore, endRound, randomize}){
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = (e) =>{
        e.preventDefault()
        if(isClicked){
            endRound()
        } else {       
        setIsClicked(!isClicked)
        increaseScore()
        }
        randomize();
    }

    useEffect(() =>{
        if(reset){
            setIsClicked(false)
        }
    }, [reset])

    return(
        <div className='card'>
            <a href='#' >
                <img  onClick={handleClick} src={url}  className='card__image' alt='pokemon' />
                <p>{name}</p>
            </a>
        </div>
    )
    
}

Card.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    reset: PropTypes.bool,
    endRound: PropTypes.func,
    increaseScore: PropTypes.func,
    randomize: PropTypes.func

}