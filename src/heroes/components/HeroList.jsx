import React, { useMemo } from "react";
import { getHeroesByPublishers } from "../helpers/getHeroesByPublishers";
import { HeroCard } from "./HeroCard";
export const HeroList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {
        heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
        ))
        }
    </div>
  );
};
