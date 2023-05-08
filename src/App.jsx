
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
  const teas = useLoaderData();
  
  return (
    <div className='text-center mt-10 container mx-auto'>
      <h1 className="text-3xl font-bold text-purple-950   mb-10 ">All Hot  Coffee :  {teas.length} </h1>
      <div className='grid md:grid-cols-2 gap-6 '>
        {
          teas.map(tea => <CoffeeCard
            key={tea._id}
            tea={tea}
          ></CoffeeCard>)
        }
      </div>
      
    </div>
  );
}

export default App
