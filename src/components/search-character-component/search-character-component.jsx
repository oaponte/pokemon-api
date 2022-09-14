import React, { useState } from 'react'
import { searchCharacterService } from '../../services/search-character.service';
import { searchCharacterImg } from '../../utils/img';

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
    <div>
      <h3>Pokemon search</h3>
      <input type='text' onChange={handleChange} />
      <button onClick={handleSearch}>
        find
      </button>
      {
        character && (
          <>
          <hr />
            <div>
              <h2>{ `${character?.name} (${character?.id})` }</h2>
            </div>
            <div>
              <img src={searchCharacterImg(character?.id)} alt={character?.name}/>
            </div>
            <div>
              <h5>Weight: { character?.weight }</h5>
            </div>
            <div>
            <h5>Height: { character?.height }</h5> 
            </div>
          </>
        )
      }
    </div>
  )
}
