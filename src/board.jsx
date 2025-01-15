import { useState } from 'react'
import Card from './card.jsx'
import image1 from './assets/100.png'
import image2 from './assets/200.png'
import image3 from './assets/250.png'
import image4 from './assets/300.png'
import image5 from './assets/400.png'
import image6 from './assets/450.png'
import image7 from './assets/500.png'
import image8 from './assets/600.png'
import image9 from './assets/700.png'
import image10 from './assets/800.png'
import image11 from './assets/900.png'
import image12 from './assets/1000.png'

export default function Board(){
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(0);

    const images =[{image1},{image2},{image3},{image4},{image5},{image6},{image7},{image8},{image9},{image10},{image11},{image12}]

    const cardList = images.map(image =>{
        <Card url={image} />
    }) 
    return(
        <div className='board'>
            {cardList}
        </div>
    )

}