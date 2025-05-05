import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 


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
    <div className="container d-flex p-4 bg-dark text-white" style={{ minHeight: "100vh" }}>
      <div className="me-4">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
          alt={movie?.title}
          className="img-fluid"
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>
          <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/ 10<span > · </span>
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span> · </span>{movie.runtime} mins
        </p>

        <div className="mb-3">
          {movie.genres?.map((genre) => (
            <button key={genre.id} className="btn btn-outline-light btn-sm me-2 mb-2 genre-btn">
              {genre.name}
            </button>
          ))}
        </div>

        <p>
          <strong>Overview</strong><br />
          <span className="details">{movie.overview}</span>
        </p>
        <div class="paragraph-container">
        <p className="left"> <strong >Release Date:</strong><br />{movie.release_date}</p>
        <p className="right"><strong >Original Language:</strong><br />{movie.original_language.toUpperCase()}</p>
        </div>
        <br></br>
        <div class="paragraph-container2">
        <p className="left"><strong >Budget:</strong><br />${movie.budget?.toLocaleString()}</p>
        <p className="right"><strong >Revenue:</strong><br />${movie.revenue?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
