import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Player from "./components/Player";
import MusicList from "./components/MusicList";

function App() {
  return (
    <>
      <SearchBar />
      <Player />
      <MusicList/>
    </>
  );
}

export default App;
