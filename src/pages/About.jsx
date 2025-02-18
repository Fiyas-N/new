import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/About.css';

function About() {
  const movieDetails = {
    title: "Dune: Part Two",
    tagline: "Long live the fighters",
    releaseDate: "March 1, 2024",
    budget: "$190 million",
    boxOffice: "$494.7 million",
    runtime: "166 minutes",
    genres: ["Science Fiction", "Adventure", "Drama"],
    languages: ["English"],
    filmingLocations: [
      "Wadi Rum, Jordan",
      "Abu Dhabi, United Arab Emirates",
      "Budapest, Hungary",
      "Italy"
    ],
    productionCompanies: [
      "Legendary Pictures",
      "Warner Bros. Pictures"
    ],
    technicalSpecs: {
      camera: "Arri Alexa LF",
      aspectRatio: "2.39:1",
      sound: "Dolby Atmos"
    },
    awards: [
      "Academy Award Nominations (2024)",
      "Critics' Choice Movie Awards",
      "BAFTA Awards"
    ],
    synopsis: `Following the events of Dune (2021), Paul Atreides joins forces with the Fremen people of the desert planet Arrakis to wage war against House Harkonnen. As he seeks revenge against those who destroyed his family, Paul must also prevent a terrible future that only he can foresee.

The film continues to explore themes of power, politics, religion, and environmentalism while bringing Frank Herbert's epic vision to life with stunning visuals and groundbreaking special effects.

Director Denis Villeneuve returns to complete his adaptation of the first book in Frank Herbert's Dune series, delivering a visually stunning and emotionally resonant conclusion to Paul Atreides' journey.`
  };

  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About the Movie</h1>
        
        <div className="about-content">
          <div className="main-info">
            <div className="tagline">"{movieDetails.tagline}"</div>
            
            <section className="synopsis">
              <h2>Synopsis</h2>
              <p>{movieDetails.synopsis}</p>
            </section>

            <section className="key-details">
              <h2>Movie Details</h2>
              <div className="details-grid">
                <div className="detail-item">
                  <h3>Release Date</h3>
                  <p>{movieDetails.releaseDate}</p>
                </div>
                <div className="detail-item">
                  <h3>Runtime</h3>
                  <p>{movieDetails.runtime}</p>
                </div>
                <div className="detail-item">
                  <h3>Budget</h3>
                  <p>{movieDetails.budget}</p>
                </div>
                <div className="detail-item">
                  <h3>Box Office</h3>
                  <p>{movieDetails.boxOffice}</p>
                </div>
              </div>
            </section>
          </div>

          <div className="additional-info">
            <section className="genres">
              <h2>Genres</h2>
              <div className="tags">
                {movieDetails.genres.map((genre, index) => (
                  <span key={index} className="tag">{genre}</span>
                ))}
              </div>
            </section>

            <section className="filming-locations">
              <h2>Filming Locations</h2>
              <ul>
                {movieDetails.filmingLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </section>

            <section className="technical-specs">
              <h2>Technical Specifications</h2>
              <div className="specs-list">
                <div className="spec-item">
                  <span>Camera:</span> {movieDetails.technicalSpecs.camera}
                </div>
                <div className="spec-item">
                  <span>Aspect Ratio:</span> {movieDetails.technicalSpecs.aspectRatio}
                </div>
                <div className="spec-item">
                  <span>Sound:</span> {movieDetails.technicalSpecs.sound}
                </div>
              </div>
            </section>

            <section className="awards">
              <h2>Awards & Nominations</h2>
              <ul>
                {movieDetails.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;