import { heroes } from "../data/heroesData"


export const getHeroById = (id) => {


  return heroes.find(hero=> hero.id === id);
}
