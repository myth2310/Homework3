import logo from './logo.svg';
import './App.css';
import Home from './pages/home/indexx';
import Data from "./data.json";

  
function App() {
  
    return (
        <div className="App">
            <header className="App-header">
            {/* <Home />
          <div className='search'>
              <input placeholder='Search...'></input>
              <button>Search</button>
        </div> */}
         


         {Data.map(data => (
        <div className="playlist-container">
          <div className="playlist-item">
            <img
              className="playlist-image"
              src="https://pophariini.com/wp-content/uploads/2020/11/Art-work-Senja-Diaskara-Bintang-1068x1068.jpg"
              alt="playlist"
            />
            
            <div className="playlist-content">
              <h2 className="playlist-title">{data.album}</h2>
              <h3 className="playlist-description">{data.name} ~ {data.album}</h3>
            </div>
          
            <div className="playlist-actions">
              <button className="playlist-action" id=''>Select</button>
            </div>
          </div>
        </div>
        ))}
         </header>
        </div>
    );
}

export default App;
