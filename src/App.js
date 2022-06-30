import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [allcats, setCats] = useState();

  /*  setCats(jsonData) */
  const jsonNoSe = async () => {
    try {
      const url = 'https://api.thecatapi.com/v1/breeds';
      let promise = await axios.get(url);
      console.log(promise)
      let { data } = await promise;
      console.log(data)
      let sliceDeData=data.slice(0,9);
      setCats(sliceDeData)

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    jsonNoSe()
  }


    , [])

  return (
    <div className="App">
      {/* Si o si tiene que a ver un map jajaja */}
      {!allcats ? <h1>Loading...</h1> : allcats.map(cat => {
        return (
          <div>
            name:{cat.name}
            temperament:{cat.temperament}
            <p>
              image: {Object.values(cat.image.url)}

            </p>
          </div>
          

        )
      })}


    </div>
  );
}

export default App;
