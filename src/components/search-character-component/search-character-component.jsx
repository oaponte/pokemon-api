import React, { useState } from 'react'
import { searchCharacterService } from '../../services/search-character.service';
import { FoundSearchCharacterComponent } from './found-search-character-component';
import { NotFoundSearchCharacterComponent } from './not-found-search-character-component';
import './search-character.css';

export const SearchCharacterComponent = () => {
  const [nameToSearch, setNameToSearch] = useState('');
  const [character, setCharacter] = useState('');

  const handleChange = (event) => {
    setNameToSearch(event.target.value)  
  }

  const handleSearch = async () => {
    if(nameToSearch.length >= 3) {
      const foundCharacter = await searchCharacterService(nameToSearch);
      setCharacter(foundCharacter);
    }
  }

  return (
    <div className='searchComponent'>
      <input type='text' onChange={handleChange} />
      <button onClick={handleSearch}>
        find
      </button>
      {
        character ?
          <FoundSearchCharacterComponent character={character}/> : 
            character === null ? <NotFoundSearchCharacterComponent /> : '' 
      }
    </div>
  )
}
