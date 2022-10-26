import React from 'react'
import { SearchCharacterComponent } from '../../components/search-character-component/search-character-component';
import { ListCharacterComponent } from '../../components/list-characters-component/list-character-component';
import { HeaderComponent } from '../../components/header/header.component';

export const PokemonComponent = () => {

  return (
    <>
        <HeaderComponent />
        <SearchCharacterComponent />
        <ListCharacterComponent />
    </>
  )
}
