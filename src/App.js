import './App.css';
import { SearchCharacterComponent } from './components/search-character-component/search-character-component';
import { ListCharacterComponent } from './components/list-characters-component/list-character-component';

function App() {
  return (
    <div className="App">
      <SearchCharacterComponent />
      <ListCharacterComponent />
    </div>
  );
}

export default App;
