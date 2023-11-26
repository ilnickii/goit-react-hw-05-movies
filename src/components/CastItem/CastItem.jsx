import React from 'react';

const baseImageUrl = 'https://image.tmdb.org/t/p/w200';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastItem = ({ character, name, profile_path }) => {
  const imageUrl = profile_path ? `${baseImageUrl}${profile_path}` : defaultImg;

  return (
    <li>
      <img src={imageUrl} width={250} alt="poster" />
      <p>Actor's name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;