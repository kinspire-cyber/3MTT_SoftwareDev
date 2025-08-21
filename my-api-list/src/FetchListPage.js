import React, { useState, useEffect } from "react";
import ListComponent from "./ListComponent";

function FetchListPage() {
  // State variables
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Render loading, error, or data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>User List</h1>
      <ListComponent 
        items={items}
        renderItem={(user) => user.name} 
      />
    </div>
  );
}

export default FetchListPage;