import MovieCard from "../componentes/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovie, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Falló la carga de películas");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return 
        if (loading) return 

        setLoading(true)
        
        try{
           const searchResults = await searchMovie(searchQuery);
           setMovies(searchResults);
           setError(null);
        } catch(err){
            setError("fallo la busqueda de la pelicula...");
        }finally {
            setLoading(false);
        }
            
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Busca una peli..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}


            {loading ? <div className="loading">cargando...</div> : <div className="movies-grid">
                {movies.map((peli) => (
                    <MovieCard movie={peli} key={peli.id} />
                ))}
            </div>}


        </div>
    );
}

export default Home;
