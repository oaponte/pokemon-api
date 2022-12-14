import React from 'react'
import { searchCharacterImg } from '../../utils/img'

export const DetailCharacterComponent = ({character}) => {

  return (
    <>
      <div className='card FoundCards searchComponent'>
        <div>
          <img src={searchCharacterImg(character?.id)} alt={character?.name} className='FoundImg' />
        </div>
        <div>
          <h2>{ `# ${character?.id}` }</h2>
        </div>
        <div>
          <h2>{ `${character?.name}` }</h2>
        </div>
      </div>
      <div>
        <h2>Back</h2>
      </div>
    </>
  )
}
