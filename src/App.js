import Header from "./components/Header";
import CardList from "./components/CardList";
import { useState } from 'react';
import ImageData from './data/ImageData';
// import arrayShuffle from 'array-shuffle';

function App() {

  const [imgData, setImgData] = useState(ImageData)
  // const [gamePieces, setGamePieces] = useState([]);
  // const [clickedCards, setClickedCards] = useState([]);
  // const [currentScore, setCurrentScore] = useState([]);
  // const [highScore, setHighScore] = useState([]);

  // const shuffleCards = () => {
  //   const shuffledCards = [...]
  // }

  return (
    <div className="App">
      <Header />
      <CardList imgData={imgData} />
    </div>
  );
}

export default App;
