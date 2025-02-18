import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/Home.css';

function Home() {
  const [showFullPlot, setShowFullPlot] = useState(false);

  const movieDetails = {
    title: "Dune: Part Two",
    year: "2024",
    rating: "PG-13",
    duration: "2h 46m",
    poster: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    plot: "Dune: Part Two is a 2024 American epic space opera film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts. The sequel to Dune (2021), it is the second of a two-part adaptation of the 1965 novel Dune by Frank Herbert. It follows Paul Atreides as he unites with the Fremen people of the desert planet Arrakis to wage war against House Harkonnen.",
    fullPlot: "Dune: Part Two is a 2024 American epic space opera film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts. The sequel to Dune (2021), it is the second of a two-part adaptation of the 1965 novel Dune by Frank Herbert. It follows Paul Atreides as he unites with the Fremen people of the desert planet Arrakis to wage war against House Harkonnen. Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin, Stellan Skarsgård, Dave Bautista, Charlotte Rampling, and Javier Bardem reprise their roles from the first film, with Austin Butler, Florence Pugh, Christopher Walken, and Léa Seydoux joining the cast.",
    director: "Denis Villeneuve",
    writers: ["Denis Villeneuve", "Jon Spaihts", "Frank Herbert"],
    userRating: 8.9,
    totalRatings: 125890,
  };

  return (
    <>
      <Navbar />
      <div className="movie-container">
        <header className="movie-header">
          <h1>{movieDetails.title}</h1>
          <div className="movie-meta">
            <span>{movieDetails.year}</span>
            <span>{movieDetails.rating}</span>
            <span>{movieDetails.duration}</span>
          </div>
        </header>

        <div className="movie-content">
          <div className="movie-poster">
            <img src={movieDetails.poster} alt={movieDetails.title} />
            <div className="rating-preview">
              <div className="rating-score">
                <span className="score">{movieDetails.userRating}</span>
                <span className="out-of">/10</span>
              </div>
              <div className="rating-count">
                {movieDetails.totalRatings.toLocaleString()} ratings
              </div>
              <Link to="/rating" className="rate-now-btn">
                Rate Now
              </Link>
            </div>
          </div>

          <div className="movie-info">
            <div className="plot-section">
              <h3>Plot</h3>
              <p>{showFullPlot ? movieDetails.fullPlot : movieDetails.plot}</p>
              <button 
                className="read-more-btn"
                onClick={() => setShowFullPlot(!showFullPlot)}
              >
                {showFullPlot ? 'Show Less' : 'Read More'}
              </button>
            </div>

            <div className="credits-section">
              <div className="director">
                <h3>Director</h3>
                <p>{movieDetails.director}</p>
              </div>

              <div className="writers">
                <h3>Writers</h3>
                <p>{movieDetails.writers.join(', ')}</p>
              </div>

              <div className="quick-links">
                <Link to="/cast" className="quick-link-btn">
                  View Full Cast
                </Link>
                <Link to="/about" className="quick-link-btn">
                  About Movie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;