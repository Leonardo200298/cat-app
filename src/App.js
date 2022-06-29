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
      setCats(data)

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect( ()=>{
    jsonNoSe()
  }

    
, [])

  return (
    <div className="App">
      {/* Si o si tiene que a ver un map jajaja */}
      {!allcats ? <h1>Loading...</h1> : allcats.map(cat => <p>{cat.name}</p>)}
      

    </div>
  );
}

export default App;
