import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour, index) => (
        <Tour key={index} data={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
