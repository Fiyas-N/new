import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/Rating.css';

function Rating() {
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const movieStats = {
    averageRating: 8.9,
    totalRatings: 125890,
    ratingDistribution: [
      { stars: 5, percentage: 45, count: 56650 },
      { stars: 4, percentage: 35, count: 44061 },
      { stars: 3, percentage: 12, count: 15107 },
      { stars: 2, percentage: 5, count: 6294 },
      { stars: 1, percentage: 3, count: 3778 }
    ]
  };

  const handleRating = (rating) => {
    setUserRating(rating);
    setHasRated(true);
  };

  return (
    <>
      <Navbar />
      <div className="rating-container">
        <h1>Rate Dune: Part Two</h1>
        
        <div className="rating-content">
          <div className="rating-overview">
            <div className="average-rating">
              <span className="big-rating">{movieStats.averageRating}</span>
              <span className="out-of">/10</span>
              <div className="total-ratings">
                {movieStats.totalRatings.toLocaleString()} ratings
              </div>
            </div>

            <div className="rating-distribution">
              {movieStats.ratingDistribution.map((dist, index) => (
                <div key={index} className="rating-bar">
                  <span className="stars">{dist.stars} stars</span>
                  <div className="bar-container">
                    <div 
                      className="bar" 
                      style={{ width: `${dist.percentage}%` }}
                    ></div>
                  </div>
                  <span className="percentage">{dist.percentage}%</span>
                  <span className="count">({dist.count.toLocaleString()})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="user-rating-section">
            <h2>{hasRated ? 'Your Rating' : 'Rate This Movie'}</h2>
            <div className="star-rating">
              {[...Array(10)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    key={index}
                    className={`star ${ratingValue <= (hoveredRating || userRating) ? 'active' : ''}`}
                    onClick={() => handleRating(ratingValue)}
                    onMouseEnter={() => setHoveredRating(ratingValue)}
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    ★
                  </button>
                );
              })}
            </div>
            {hasRated && (
              <div className="rating-message">
                <p>Thank you for rating!</p>
                <button 
                  className="rate-again-btn"
                  onClick={() => {
                    setUserRating(0);
                    setHasRated(false);
                  }}
                >
                  Rate Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;