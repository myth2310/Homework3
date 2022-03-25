import logo from './logo.svg';
import './App.css';
import Home from './pages/home/indexx';
import Data from './data';

  
function App() {
  
    return (
        <div className="App">
            <header className="App-header">
            {/* <Home />
          <div className='search'>
              <input placeholder='Search...'></input>
              <button>Search</button>
        </div> */}
         


        <div className="playlist-container">
          <div className="playlist-item">
            <img
              className="playlist-image"
              src={Data.album.imgAlbum}
              alt="playlist"
            />
            <div className="playlist-content">
              <h2 className="playlist-title">{Data.album.name}</h2>
              <div className='desc'>
              <p>{Data.album.Art}</p>
              <p>{Data.album.total_tracks} Songs</p>
              </div>
            </div>
            <div className="playlist-actions">
              <button className="playlist-action" id=''><a href={Data.external_urls.spotify}>Select</a></button>
            </div>
          </div>
        </div>
       
         </header>
        </div>
    );
}

export default App;
