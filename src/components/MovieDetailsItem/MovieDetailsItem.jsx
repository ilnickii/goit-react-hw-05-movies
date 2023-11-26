import React from 'react';
const movieImageUrl = 'https://image.tmdb.org/t/p/w300';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailsItem = ({ poster_path, title, overview, genres }) => {
  const imageUrl = poster_path ? `${movieImageUrl}${poster_path}` : defaultImg;

  return (
    <div>
      <div>
        <img
          src={imageUrl}
          alt={`Poster for ${title}`}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <div>
            <h4>Genres</h4>
            <ul>
              {genres.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsItem;