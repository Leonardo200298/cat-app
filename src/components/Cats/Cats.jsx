import React from 'react'
import './Cats.css'

export default function Cats({ key, breed, temperament, img }) {
    return (
        <div className='classCats' key={key}>
            <p>
                Breed:{breed}
            </p>
            <p>
                temperament:{temperament}

            </p>
            <img src={img} alt="gatitos" />
        </div>
    )
}
