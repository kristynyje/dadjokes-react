import React from 'react';
import './style.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);
  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={userAvatar} />
          <p class="user-name">{userName}</p>
        </div>
        <p class="joke__text">{text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={() => setLike(like + 1)}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {like}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={() => setDislike(dislike + 1)}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {dislike}
        </span>
      </div>
    </div>
  );
};
