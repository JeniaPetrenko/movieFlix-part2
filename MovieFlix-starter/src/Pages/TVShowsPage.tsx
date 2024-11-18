import { useState, useEffect } from "react";
import { IShow } from "../Models/IShow";
import { LoadShows } from "../Utilities/LoadShows";
import ItemsList from "../Components/ItemsList";

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    console.log(shows);
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setShows(await LoadShows("discover/tv"));
    console.log(shows);
  };

  return (
    <>
      <h1 className="page-title">Populära Serier</h1>
      <ItemsList items={shows} />

      {/*Komponent skickats till
       <section className='grid'>
        {shows.map((show) => (
          <section className='card'>
            <NavLink to={`/shows/${show.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
            </NavLink>
            <div className='card-body'>
              <h5>{show.name}</h5>
              <small className='text-muted'>{show.first_air_date}</small>
            </div>
          </section>
        ))}
      </section> */}
    </>
  );
};
