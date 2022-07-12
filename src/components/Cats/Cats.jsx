import React from 'react'
import './Cats.css'

export default function Cats({ key, breed, temperament, img }) {
    return (
        <div className='homeClass' key={key}>
            <p>
                Breed:{breed}
            </p>
            <p>
                temperament:{temperament}

            </p>
            <img className='imageSize' src={img} alt="gatitos" />
        </div>
    )
}
