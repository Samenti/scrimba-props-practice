import React from 'react';

export default function Joke(props) {
  const {num, setup, punchline} = props;
  
  const ids = [num + 1, num + 1, (num + 1) * Math.random()];
  let setupLine;
  if (setup == null) {
    setupLine = <></>;
  } else {
    setupLine = <li key={ids[1]} className="setup">{setup}</li>;
  }

  return (
    <ul key={ids[0]} className="joke">
      {setupLine}
      <li key={ids[2]} className="punchline">{punchline}</li>
    </ul>
  );
};