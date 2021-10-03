import React, { useState, useEffect } from "react";
import Loader from "react-animated-loader";
import Recipe from "./Recipe";

const App = () => {
  const appId = "647e6198";
  const appKey = "ee3aa3e7705fda2dd9cee3d52acb1a9e";

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [recipe, setRecpie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.length === 0) {
      setError("Please enter a valid Recipe to search");
      return;
    }

    setLoading(true);
    setError("");
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRecpie(response.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setError('Something went wrong. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Recipe Finder
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>

      <h1 className="text-center mt-5">Recipe Finder</h1>

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader />
        </div>
      ) : error ? (
        <div className="container mt-4">
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      ) : <Recipe recipe={recipe} />}
    </div>
  );
};

export default App;
