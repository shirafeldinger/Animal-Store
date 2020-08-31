import React from "react";

const deals = useEffect(() => {
  fetch("https://www.cheapshark.com/api/1.0/deals")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });

  return () => {};
}, []);

export default deals;
