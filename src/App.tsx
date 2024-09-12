import { useState, useEffect } from 'react'
import Card from './components/card'
import './App.css'
import { RickMortyService } from './services/RickMortyService'

const level = 5;
const totalCards = 10;

function App() {
  const [data, setData] = useState<any[]>([]);
  const [attempts, setAttemps] = useState<number>(0);
  const [selected, setSelected ] = useState<number>(0);
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }


  useEffect( () => {
    const peticion = () => {
      RickMortyService.getCharacters().then(res => {
        const { results } = res;
        const resultSlices = results.slice(0, level);
        let cardsTotal:any[] = []
        for(let i = 0; i < totalCards ; i++) {
          const randomNumber = getRandomInt(level)
          cardsTotal.push(resultSlices[randomNumber])
        }
        cardsTotal.concat(cardsTotal)
        setData([...cardsTotal.concat(cardsTotal)])
      });
    }
    peticion();
  }, [])

  useEffect( () => {
    if( attempts > 2 ) {
      setAttemps(0);
    }
  }, [attempts])


  function showImage(info: number) {
    
    if( attempts === 1){
      if( info === selected ){
        
      }
      setTimeout(() => {
        setAttemps(attempts + 1);
      }, 2000);

    } else {
      setSelected(info)
      setAttemps(attempts + 1);
    }
  }
  return (
    <>
      <div className='app'>
        {attempts}
          {data.map((info, index) => (
            <Card attempts={attempts} eventClick={showImage} index={index} id={info.id} title={info.name} urlImage={info.image}></Card>
          ))}
      </div>
    </>
  )
}

export default App
