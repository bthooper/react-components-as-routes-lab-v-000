import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, key) => (
        <div key={key}>{director.name}
        <ul>
          {director.movies.map((movie, key) => (
              <li key={key}>{movie}</li>
          ))}
        </ul>
      </div>
      ))}
    </div>
  );
}

export default Directors
