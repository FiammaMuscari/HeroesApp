import React from 'react'
import { useParams } from 'react-router-dom'
import { HeroList } from '../components/HeroList'

export const HeroByPublisherPage = () => {

    const {publisher} = useParams()
  return (
    <>
    <HeroList publisher ={publisher}/>
    </>
  )
}
