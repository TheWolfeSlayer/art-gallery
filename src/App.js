import {useState, useEffect} from 'react'

import ButtonBar from "./components/ButtonBar";

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  <ButtonBar handleIterate />

  useEffect(() => {
    document.title = 'Welcom to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  function Gallery(props) {
    return (
      <div style={{ 'width': '50%' }}>
        <img src={props.objectImg} alt={props.title} />
      </div>
    )
  }
  
  return (
    <div>
      <ButtonBar handleIterate={handleIterate} />
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
    </div>
  );
}

export default App;
