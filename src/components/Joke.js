import React from 'react';

export default function Joke(props) {
  const {num, setup, punchline} = props;
  
  const ids = [num + 1, num + 1, (num + 1) * Math.random()];

  return (
    <ul key={ids[0]} className="joke">
      {setup && <li key={ids[1]} className="setup">{setup}</li>}
      <li key={ids[2]} className="punchline">{punchline}</li>
    </ul>
  );
};