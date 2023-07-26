import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import "./DevJokes.css"

function DevJokes() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((result) => {
        setJoke(result.data[0]);
      })
      .catch({});
  }, []);

  return (
    <>
      <Typography className="cardTextJoke">{joke.question}</Typography>
      <Typography className="cardTextJoke">{joke.punchline}</Typography>
    </>
  );
}

export default DevJokes;
