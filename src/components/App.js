import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setTours([
        {
          name: "Paris City Lights Tour",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
          price: 1200,
          description:
            "Explore the romantic city of Paris, visiting the Eiffel Tower, Louvre Museum, and Seine River cruise under the sparkling city lights."
        },
        {
          name: "Bali Beach Escape",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          price: 950,
          description:
            "Relax on Bali’s tropical beaches, enjoy water sports, and experience local Balinese culture and temples."
        },
        {
          name: "Swiss Alps Adventure",
          image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
          price: 1450,
          description:
            "Enjoy scenic train rides through the Swiss Alps, mountain hiking, and breathtaking views of snow-capped peaks."
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const removeTour = (name) => {
    setTours(tours.filter((tour) => tour.name !== name));
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
