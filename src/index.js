import React, { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [mql, setMql] = useState();

  useEffect(() => {
    const handleResize = () => {
      setMql(window.matchMedia(query).matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mql;
}
