import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://fine-pink-katydid-ring.cyclic.app/attractions')
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      setItems(result)
    })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Attractions</h1>
      <ul>
        {items.map((item) =>(
          <li key={item.id}>
            {item.name}<br/>
            {item.detail}<br/>
            <img scr={item.coverimage} alt={item.name}/>

          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default App;
