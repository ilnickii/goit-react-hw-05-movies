import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import {  Link, NavLink, Route, Routes, useLocation, useParams,} from 'react-router-dom';
import { getMovie } from 'services/getTrendingMovies';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
import CSS from './MovieDetails.module.css';


const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movieData, setMoviedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Something went wrong! Try again later');

    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!id) return;

        async function fetchMovieDate() {
            try {
                setIsLoading(true);
                const mDetails = await getMovie(id);
                setMoviedData(mDetails);
            } catch (error) {
                setHasError(true);
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovieDate();
    }, [id]);

    return (
        <Suspense Fallback={<div>Loading...</div>}>
            <Link to={backLinkRef.current} className={CSS.goBackLink}>
                Go back
            </Link>
            {hasError && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            {isLoading && (
                <div>
                    <p>Loading...</p>
                </div>
            )}
            <div className={CSS.DeteilsContainer}>
                 {movieData && (
                    <MovieDetailsItem
                        id={movieData.id}
                        poster_path={movieData.poster_path}
                        title={movieData.title}
                        genres={movieData.genres}
                        overview={movieData.overview}
                    />
                )}
                <div>
                    <h2>Additional Information</h2>
                    <ul>
                        <li>
                            <NavLink to="cast">Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Routes>
            </div>
        </Suspense>
    );

};


export default MovieDetails;