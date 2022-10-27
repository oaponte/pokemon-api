import React from 'react'
import { searchCharacterImg } from '../../utils/img'
import { PIKACHU_ID, PIKACHU_NAME } from '../../utils/constants'

export const NotFoundSearchCharacterComponent = () => {
  return (
    <>
      <div className='card FoundCards searchComponent'>
        <h2>
          Not found <img src={searchCharacterImg(PIKACHU_ID)} alt={PIKACHU_NAME} className={'notFoundImg'}/>
        </h2>
      </div>
    </>
  )
}
