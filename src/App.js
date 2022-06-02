import Header from "./components/Header";
import CardList from "./components/CardList";
import { useState } from 'react';
import ImageData from './data/ImageData';


function App() {
  const [imgData, setImgData] = useState(ImageData)

  const shuffleWords = () => {
    for (let i = imgData.length; --i;)  {
        let j = Math.floor(Math.random() * (i + 1));
        [imgData[i], imgData[j]] = [imgData[j], imgData[i]]
    }
    setImgData([...imgData]);
}

  return (
    <div className="App">
      <Header />
      <CardList shuffleWords={shuffleWords} imgData={imgData} />
    </div>
  );
}

export default App;
