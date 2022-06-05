import Header from "./components/Header";
import CardList from "./components/CardList";
import { useState } from 'react';
import ImageData from './data/ImageData';
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [imgData, setImgData] = useState(ImageData)
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleArray = () => {
    for (let i = imgData.length; --i;)  {
        let j = Math.floor(Math.random() * (i + 1));
        [imgData[i], imgData[j]] = [imgData[j], imgData[i]]
    }
    setImgData([...imgData]);
  }

  const handleScore = (id) => {
    imgData.forEach(item => {
      if(id === item.id && item.clicked === false){
        item.clicked = true;
        setScore(score + 1)
      } else if(id === item.id && item.clicked === true){
        if(highScore < score){
          setHighScore(score)
        }
        setScore(0);
        item.clicked = true;
        imgData.forEach(item => (item.clicked = false));
      }
    })
  }

  const handleClick = () => {
    handleScore();
    shuffleArray();
  }

  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} />
      <CardList handleClick={handleClick} imgData={imgData} />
    </div>
  );
}

export default App;
