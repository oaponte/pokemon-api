import React, { useState, useEffect } from 'react'
import { getListCharacters } from '../actions/search-character.action';
import { searchCharacterImg } from '../../utils/img';

export const ListCharacterComponent = () => {
  const limit = 20;
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  const setListCharacters = async (limit, nextPage) => {
    setNextPage(nextPage + limit);
    const foundCharacters = await getListCharacters(limit, nextPage);
    setCharacters([...characters, ...foundCharacters]);
  }

  const showMore = () => {
    setCurrentPage(currentPage + limit);
    setListCharacters(limit, nextPage);
  }

  useEffect(() => {
    setListCharacters(limit, 0);
    return () => {
      setCurrentPage(0);
      setNextPage(0);
      setCharacters([]);
    }
  }, []);

  return (
    <div>
      <hr />
      <h3>Pokemon list!</h3>
      {
        characters && (
          <>
            <div>
              { characters.map(((item, index) => {
                const idx = index + 1;
                return (
                  <p key={idx}><img src={searchCharacterImg(idx)} alt={item?.name}/>{ `${item?.name} (${idx})` }</p>
                )
                })
              )}
            </div>
            <div onClick={() => showMore()}>
              <h4>Show more...</h4>
            </div>
          </>
        )
      }
    </div>
  )
}
