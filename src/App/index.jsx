import React from 'react';
import { Joke } from '../Joke';
import { jokes } from '/src/index.jsx';

export const App = () => {
  return (
    <div class="container">
      {jokes.map((joke) => (
        <Joke
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
          key={joke.id}
        />
      ))}
    </div>
  );
};
