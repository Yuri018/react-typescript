import { useState, useEffect } from "react";

import { Homework24Wrapper, Card, Text } from "./styles";
import Button from "components/Button";

function Homework24() {
  const [randomJoke, setRandomJoke] = useState<string>("");
  const [jokeError, setJokeError] = useState<string>("");

  const getRandomLoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      setTimeout(() => alert("You got a new joke"), 0);
      setRandomJoke(data);
    } else {
      setTimeout(() => alert("Error during data retrieval"), 0);
      setJokeError("Error during data retrieval");
    }

    // useEffect(() => {
    //   getRandomLoke();
    // }, []);
    return (
      <Homework24Wrapper>
        <Card>
          <Text>Random jokes</Text>
          <div>{randomJoke}</div>
          <Button name="New joke" onClick={getRandomLoke} />
        </Card>
      </Homework24Wrapper>
    );
  };
}

export default Homework24;
