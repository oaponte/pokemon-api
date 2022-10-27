import React from 'react'
import { types } from '../../utils/constants'

export const TypesComponent = ({ characterTypes }) => {
    console.log(characterTypes)
    return (
        characterTypes.map((item, key) => {
            return <span className={`types badge text-bg-${types[item?.type?.name]}`}>{ item?.type?.name?.toUpperCase() }</span>
        })
    )
}
