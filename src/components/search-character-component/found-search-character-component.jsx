import React from 'react'
import { searchCharacterImg } from '../../utils/img'
import { TypesComponent } from '../types-component/types.component';

export const FoundSearchCharacterComponent = ({character}) => {

  const handleOnClick = (character) => {
    console.log("handleOnClick");

  }

  return (
    <>
      <div className='card FoundCards searchComponent' onClick={() => handleOnClick(character)}>
        <div>
          <img src={searchCharacterImg(character?.id)} alt={character?.name} className='FoundImg' />
        </div>
        <div>
          <h2>{ `# ${character?.id}` }</h2>
        </div>
        <div>
          <h2>{ `${character?.name}` }</h2>
        </div>
        <div>
          <TypesComponent characterTypes={character?.types}/>
        </div>
      </div>
    </>
  )
}
