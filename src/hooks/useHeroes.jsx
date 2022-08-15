import React from 'react'
import { useContext } from 'react'
import { HeroesContext } from '../heroes/context/HeroesContext'

//hook for heroes
export const useHeroes = () => {
    const{
        state: {data, isLoading,},
        actions: {getHeroById,getHeroByName,getHeroesByPublishers,},
    } = useContext(HeroesContext)

  return {data, isLoading, getHeroById, getHeroByName, getHeroesByPublishers,}
}


