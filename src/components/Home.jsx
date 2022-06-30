import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
    
  const [allcats, setCats] = useState();
  const url = 'https://api.thecatapi.com/v1/breeds';

  const apiInfo = async () => {
    try {
      let promise = await axios.get(url);
      console.log(promise)
      let { data } = await promise;
      console.log(data)
      let sliceDeData=data.slice(0,20);
      setCats(sliceDeData)

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiInfo();
  },[])

    return (
        <div>
        {/* Si o si tiene que a ver un map jajaja */}
        {!allcats ? <h1>Loading...</h1> : allcats.map(cat => {
          return (
            <div>
              name:{cat.name}
              temperament:{cat.temperament}
              <img src={cat.image.url} alt="gatitos" />
            </div>
            
  
          )
        })}
  
  
      </div>
   
    )
}