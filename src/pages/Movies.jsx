import MovieList from '../components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../services/getTrendingMovies';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [MovieSearch, setMovieSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(
        'Something went wrong! Try again later'
    );

    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;
        async function fetchMovieSearch() {
            try {
                setIsLoading(true);
                const mSearch = await getMovieSearch(query);
                setMovieSearch(mSearch);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovieSearch();
        
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchValue = e.currentTarget.elements.searchMovie.value;
        setSearchParams({ query: searchValue });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        name="searchMovie"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies..."
                        required
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            <section>
                {error && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                {isLoading && (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}
                <ul>
                    {MovieSearch !== 0 &&
                         <MovieList movies={MovieSearch} />}
                </ul>
            </section>
        </>
    );
};

export default Movies;