import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { HeroesContext } from './HeroesContext'


export const HeroesProvider = ({children}) => {

const {data, isLoading} = useFetch('https://akabab.github.io/superhero-api/api/all.json')
//add ? to data if exist execute code
const getHeroById = (id) => {
  return data?.find(hero=> hero.id === id);
}
const getHeroByName = (name='') =>{
  name = name.toLowerCase().trim()
  if (name.length===0) return []
  return data?.filter(
      hero => hero.name.toLowerCase().includes(name)
  )
}

const getHeroesByPublishers = (publisher) => {
  publisher = publisher.toLowerCase().trim()
  if(publisher.length === 0) return [];

  return data?.filter( hero => {
      return hero.biography?.publisher?.toLowerCase().includes(publisher)
      }
  )
}





const state = {
  data,
  isLoading,
}

const actions = {
  getHeroById,
  getHeroByName,
  getHeroesByPublishers,
}

  return (//provee a todos los componentes de este contexto de toda la informacion que pasamos por aca
    <HeroesContext.Provider value={{state,actions}}>
        {children}
    </HeroesContext.Provider>
  )
}