import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHeroes } from "../../hooks/useHeroes";

export const HeroesPage = () => {
  const { heroId } = useParams();
  const { isLoading, getHeroById } = useHeroes();
  const hero = getHeroById(parseInt(heroId));

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      {!isLoading && (
        <div className="row nt-5">
          <div className="col-5 animate__animated animate__fadeInLeft">
            <img
              src={hero.images.lg}
              alt={hero.name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-7">
            <h1 className="h1">{hero.name}</h1>
            <h5 className="d-grid justify-content-flex-start justify-items gap-2">
              <ul >
                Intelligence⠀
                <CircularProgress
                  value={hero.powerstats.intelligence}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.intelligence}
                  </CircularProgressLabel>
                </CircularProgress>
              </ul>
              <ul >Strength⠀<CircularProgress
                  value={hero.powerstats.strength}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.strength}
                  </CircularProgressLabel>
                </CircularProgress>
              </ul>
              <ul>Speed⠀<CircularProgress
                  value={hero.powerstats.speed}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.speed}
                  </CircularProgressLabel>
                </CircularProgress></ul>
              <ul>Durability⠀<CircularProgress
                  value={hero.powerstats.durability}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.durability}
                  </CircularProgressLabel>
                </CircularProgress></ul>
              <ul>Power⠀<CircularProgress
                  value={hero.powerstats.power}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.power}
                  </CircularProgressLabel>
                </CircularProgress></ul>
              <ul>Combat⠀<CircularProgress
                  value={hero.powerstats.combat}
                  color="green.400"
                >
                  <CircularProgressLabel>
                    {hero.powerstats.combat}
                  </CircularProgressLabel>
                </CircularProgress></ul>
            </h5>
            <ul className="list-group list-group-flush p-2">
              <b>Alter ego: </b>
              {hero.biography.alterEgos}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>Publisher: </b>
              {hero.biography.publisher}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>First Appareance: </b>
              {hero.biography.firstAppearance}
            </ul>
            <p>{hero.characters}</p>
            <button
              className="btn btn-outline-primary m-2"
              onClick={onNavigateBack}
            >
              Back...
            </button>
          </div>
        </div>
      )}
    </>
  );
};
