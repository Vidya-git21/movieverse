
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { useParams } from 'react-router-dom';

 
// const Card = () => {
//   const [movieList, setMovieList] = useState([]);
//   const [search, setSearch] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate(); 

 
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
 
  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2de723528fdd0acf0a9b237c0cac6561`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
 
  useEffect(() => {
    getMovieDetails();
  }, [id]);
 
  if (!movie) return <p className="text-white p-4">Loading...</p>;
 
  return (
    <div
      className="container d-flex p-4 bg-dark text-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="me-4">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="img-fluid"
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <div className="first-line">
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Original Language</strong> {movie.original_language}
        </p>
        </div>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Budget</strong> {movie.budget}
        </p>
        <p>
          <strong>Revenue</strong> {movie.revenue}
        </p>
     
      </div>
    </div>
  );
};
// }
export default MovieDetails;





