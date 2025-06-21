import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
            
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Start adding to favorites and you'll see them here!</p>
        </div>
    )
}

export default Favorites