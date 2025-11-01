import React, { useState } from "react";

const Tour = ({ data, removeTour }) => {
  const { name, image, price, description } = data;
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} width="300" />
      <h5>Price: ${price}</h5>
      <p>
        {showMore ? description : `${description.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "See less" : "Show more"}
        </button>
      </p>
      <button onClick={() => removeTour(name)}>Remove</button>
    </div>
  );
};

export default Tour;
