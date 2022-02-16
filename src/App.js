import React from 'react';
import Form from './components/Form.js';
import Joke from './components/Joke.js';

export default function App(props) {
  const jokeElements = props.jokes.map((joke, index) => {
    const {setup=null, punchline} = joke;
    return (
      <Joke 
        key = {index}
        num= {index}
        setup = {setup}
        punchline = {punchline}
      />
    );
  });

  return (
    <div className="container">
        {jokeElements}
        <Form />
    </div>
  );
};