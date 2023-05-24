import React, { useEffect, useState } from "react";

const useFetch = (pages) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://internship-service.onrender.com/videos?page=${pages}`
      );
      const jsonData = await response.json();
      setData(jsonData.data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pages]);
  return { data, loading };
};

export default useFetch;
