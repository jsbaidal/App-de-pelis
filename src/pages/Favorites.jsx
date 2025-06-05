
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";

import MovieCard from "../componentes/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Sus pelis favoritas</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>Sin favoritos aun </h2>
      <p>Añade tus favoritos para que se muestren aquí</p>
    </div>
  );
}

export default Favorites;
