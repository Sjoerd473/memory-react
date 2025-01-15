import { useState } from 'react'



export default function Card({url}){
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = (e) =>{
        e.preventDefault()
        setIsClicked(!isClicked)
    }

    return(
        <div className='card'>
            <a href='#' onClick={handleClick}>
                <img src={url}  className='card__image' alt='pokemon' />
            </a>
        </div>
    )
    
}