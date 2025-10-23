import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('../plants.json')
    .then((data) => setPlants(data.data))
    .catch((err) => setError(err))
    // .finally(() => setLoading(false))
    .finally(() => {
        setTimeout(() => setLoading(false), 500); 
      });
  }, []);
  return { plants, loading, error };
};

export default usePlants;