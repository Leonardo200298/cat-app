import axios from 'axios';
import { useEffect, useState } from 'react';
import Cats from '../Cats/Cats';
import './Home.css'

export default function Home() {

  const [allcats, setCats] = useState();
  const url = 'https://api.thecatapi.com/v1/breeds';

  const apiInfo = async () => {
    try {
      let promise = await axios.get(url);
      console.log(promise)
      let { data } = await promise;
      console.log(data)
      let sliceDeData = data.slice(0, 20);
      setCats(sliceDeData)

    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    apiInfo();
  }, [])
  return (
    <div>
      {!allcats ? <h1>Loading...</h1> : allcats.map(cat => {
        return (
          <div className='homeClass'>
      
            <Cats 
              key={cat.id}
              breed={cat.name}
              temperament={cat.temperament}
              img={cat.image.url}

            />
          </div>
        )
      })}
    </div>
  )
}