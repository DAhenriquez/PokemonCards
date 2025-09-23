import { useState, useEffect } from 'react';
import './App.css';
import TCGdex from '@tcgdex/sdk';
import Loading from './components/Loading/loading';
import { Text, Grid} from '@mantine/core';
import CardComponent from './components/Card/card';

const tcgdex = new TCGdex('en');

//La función async se define fuera de App
//Recibe como argumentos las funciones que modificarán el estado.
const fetchAllCards = async (setCards, setIsLoading) => {
  try {
    // Inicia la carga
    setIsLoading(true);

    const baseSet = await tcgdex.set.get('base1');
    
    // Actualiza el estado de las cartas
    setCards(baseSet.cards);

  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    setCards([]); 
  } finally {
    // Termina la carga, tanto si hubo éxito como si hubo error
    setIsLoading(false);
  }
};


function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Aquí invocamos la función externa
    fetchAllCards(setCards, setIsLoading);
  }, []); // Se ejecuta solo una vez
  // dejamos el array vacío para que solo se ejecute una vez al montar el componente

  if (isLoading) {
    //retornamos el componente que creamos en caso de que se encuentre cargando
    return <Loading text='Cargando cartas...'></Loading>;
  }

  return (
    <div className="App">
      <div className='header-container'>
        <img src="/pokeball.png" alt="Pokeball" className="pokeball-image" />
        <div className='Header'>
        <Text size="xl" ta="center" fw="bold" c="white">
          Galería de Cartas: "Base Set"
        </Text>
        <Text size="sm" ta="center" fw="bold" c="white">
          Por: Diego A. Henríquez
        </Text>
      </div>
      
      </div>
      <Grid mt="md">
        {cards.map((card) => (
          <Grid.Col key={card.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <CardComponent card={card} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default App;