import React, { useState } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";

export function ParameterizedComponent({ parameter, next }) {
  const player = usePlayer();
  console.log("parameter", parameter);
  const [myStatefulValue, setMyStatefulValue] = useState(0);
  console.log("myStatefulValue", myStatefulValue);

  const update = () => {
    setMyStatefulValue((old) => old + 1);
    player.set("myValue", myStatefulValue + 1);
  };

  return (
    <div>
      <h1>Parameterized Component</h1>
      <p>Here is a parameterized component.</p>
      <p>Current value: {myStatefulValue}</p>
      <button onClick={update}>+1</button>
      <br />
      <button onClick={next}>Next</button>
    </div>
  );
}
