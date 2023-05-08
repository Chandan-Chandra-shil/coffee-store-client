
import { useLoaderData } from 'react-router-dom';
import './App.css'

function App() {
  const coffees = useLoaderData();
  
  return (
    <div className='text-center mt-10'>
      <h1 className="text-3xl font-bold text-purple-950  ">All Hot  Coffee :  {coffees.length} </h1>
      
    </div>
  );
}

export default App
