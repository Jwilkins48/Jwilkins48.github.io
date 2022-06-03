import Header from "./components/Header";
import CardList from "./components/CardList";
import { useState } from 'react';
import ImageData from './data/ImageData';


function App() {
  const [imgData, setImgData] = useState(ImageData)
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleArray = () => {
    for (let i = imgData.length; --i;)  {
        let j = Math.floor(Math.random() * (i + 1));
        [imgData[i], imgData[j]] = [imgData[j], imgData[i]]
    }
    setImgData([...imgData]);
  }

  const handleScore = (id) => {
    imgData.forEach(item => {
      if(id === item.id && isChecked === false){
        item.clicked = true;
        setIsChecked(true);
        setScore(score + 1);
        console.log(score);
      }
    })
  }

  const handleClick = (id) => {
    shuffleArray();
    handleScore(id)
  }

  return (
    <div className="App">
      <Header />
      <CardList handleClick={handleClick} imgData={imgData} />
    </div>
  );
}

export default App;
