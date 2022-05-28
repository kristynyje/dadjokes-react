import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div class="container">
      <div class="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img
              class="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p class="user-name">Neroxx</p>
          </div>

          <p class="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div class="joke__likes">
          <button
            id="btn-up"
            class="btn-like btn-like--up"
            onClick={() => setLikes(likes + 1)}
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {likes}
          </span>
          <button
            id="btn-down"
            class="btn-like btn-like--down"
            onClick={() => setDislikes(dislikes + 1)}
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
