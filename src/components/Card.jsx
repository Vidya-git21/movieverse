
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Search from "./Search";


const Card = () => {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=2de723528fdd0acf0a9b237c0cac6561"
      );
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setSearchTerm(search);
  };

  return (
    <div className="bg-dark p-4">
      <Search search={search} setSearch={setSearch} onSearch={handleSearchClick} />

      <div
        className="your-class-name m-4 p-4 bg-dark "
      >
    
       { filteredMovies.map((movie) => (
  <div
    key={movie.id}
    className="card Movie-card"
  >
    <img
      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      className="card-img-top"
      alt={movie.title}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="year-color">{new Date(movie.release_date).getFullYear()}</p>
    </div>
    <div className="card-footer border-success">
      <CiStar className="star"/>
      {movie.vote_average.toFixed(1)}
    </div>
  </div>
))
}
      </div>
    </div>
  );
};

export default Card;
