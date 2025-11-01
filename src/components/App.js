import React, { useState } from "react";

const toursData = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=60",
    price: "$1,995",
    description:
      "Experience the best of Paris — the City of Light — in a week filled with art, food, and culture. Visit the Louvre, Eiffel Tower, and Montmartre. This tour offers a balance of guided sightseeing and free time to explore at your own pace. With local experts and a small group setting, you'll see why Paris remains one of the most beloved cities in the world. Enjoy authentic croissants, romantic evening walks, and an unforgettable journey through history, art, and cuisine. Perfect for travelers looking to make lifelong memories in one of Europe's most iconic destinations.",
  },
];

function App() {
  const [tours, setTours] = useState(toursData);
  const [showMore, setShowMore] = useState({});

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="main">
      {tours.map((tour) => {
        const { id, name, image, price, description } = tour;
        const isExpanded = showMore[id];
        return (
          <div key={id} className="tour-item">
            <h2>{name}</h2>
            <img src={image} alt={name} width="300" />
            <p>Price: {price}</p>

            <p id={`tour-item-para-${id}`}>
              {isExpanded
                ? description
                : `${description.split(" ").slice(0, 200).join(" ")}...`}
            </p>

            <button
              id={`see-more-${id}`}
              onClick={() => toggleShowMore(id)}
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>

            <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
              Not Interested
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
