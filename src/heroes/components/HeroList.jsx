import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useHeroes } from "../../hooks/useHeroes";
import { SearchByPublisher } from "./SearchByPublisher";
import { Pagination } from "../../ui/components/Pagination";
import { HeroCard } from "./HeroCard";
import '../../../src/styles.css'
export const HeroList = ({ publisher }) => {
  const { getHeroesByPublishers } = useHeroes();
  const heroes = getHeroesByPublishers(publisher);

  const { counter, decrement, increment } = useCounter(1);
  const maxHeroes = 20;
  const lastPage = Math.ceil(heroes?.length / maxHeroes);

  return (
    <>
    <SearchByPublisher/>
      <div className="products_menu paginationresp">
        <span>
          <Pagination
            page={counter}
            decrement={decrement}
            increment={increment}
            lastPage={lastPage}
          />
        </span>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {heroes
          ?.slice(
            (counter - 1) * maxHeroes,
            (counter - 1) * maxHeroes + maxHeroes
          )
          .map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
      </div>
      <div className="products_menu">
        <span>
          <Pagination
            page={counter}
            decrement={decrement}
            increment={increment}
            lastPage={lastPage}
          />
        </span>
      </div>
    </>
  );
};
