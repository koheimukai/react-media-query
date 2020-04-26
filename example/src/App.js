import React from "react";
import { useMediaQuery } from "react-media-query";

const App = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  return <div>{matches && <h1>Media query!</h1>}</div>;
};

export default App;
