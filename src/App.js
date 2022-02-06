import React from 'react';
import Joke from './components/Joke.js';

export default function App(props) {
  const jokes = props.jokes;

  let jokeTags = [];
  for (const [index, value] of jokes.entries()) {
    const {setup=null, punchline} = value;
    jokeTags.push(
      <Joke 
        key = {index}
        num = {index}
        setup = {setup}
        punchline = {punchline}
      />
    );
  }

  return (
    <div>
      {jokeTags}
    </div>
  );
};