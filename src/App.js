import './App.css';
import { SearchCharacterComponent } from './components/search-character-component/search-character-component';
import { ListCharacterComponent } from './components/list-characters-component/list-character-component';
import { HeaderComponent } from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchCharacterComponent />
      <ListCharacterComponent />
    </div>
  );
}

export default App;
