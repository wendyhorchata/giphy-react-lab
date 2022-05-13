import React, {useState} from "react";
import "./styles.css";
import Button from './components/Button'
import Gif from './components/Gif'

const getGifs = (setState) => {
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
  .then(setState)
  .catch(console.error)

}

  export default function App() {
    const [gifData, SetGifData] = useState ({})
    console.log(gifData) 
  

return (
    <div className="App">
      <h1>Giphy</h1>
     <Button handleSubmit={() => getGifs(SetGifData)} />
      {gifData !== '' && <Gif gifData={gifData?.data} />}  
    </div>
  );
}