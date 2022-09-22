import './App.css';
import { Card } from './components/Card';
import { ProfileCard } from './components/ProfileCard';
import {data} from "./data.js"

function App() {
  return (
    <div className="App">
   <main className='main'>
      <ProfileCard/>
    <div className='card-outer-container'>
     {data.map((item)=>
          <Card title={item.title} current={item.timeframes.weekly.current} 
          previous={item.timeframes.weekly.previous} image={item.image}
          color={item.color}
          />
      )} 
    </div>
   </main>
    </div>
  );
}

export default App;
