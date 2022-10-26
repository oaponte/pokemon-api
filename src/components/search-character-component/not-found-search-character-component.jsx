import React from 'react'
import { searchCharacterImg } from '../../utils/img'
import { PIKACHU_ID, PIKACHU_NAME } from '../../utils/constants'

export const NotFoundSearchCharacterComponent = () => {
  return (
    <>
      <div className='searchComponent'>
        <p>
          Not found <img src={searchCharacterImg(PIKACHU_ID)} alt={PIKACHU_NAME} className={'notFoundImg'}/>
        </p>
      </div>
    </>
  )
}
