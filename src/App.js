import './App.css';
import  SidePannel  from './modules/SidePannel/SidePannel'
import Banner from './modules/Banner/Banner';


function App() {
  return (
    <div className="App">
      <Banner />
      <div>
        <SidePannel />
      </div>
      
    </div>
    
  );
}

export default App;
