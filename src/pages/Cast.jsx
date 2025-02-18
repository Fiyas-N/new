import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/Cast.css';

function Cast() {
  const castMembers = [
    {
      name: "Timothée Chalamet",
      role: "Paul Atreides",
      image: "https://media.gq.com/photos/5f5a5f2d727ffe59c7f06a11/16:9/w_2560%2Cc_limit/timothee-chalamet-gq-cover-october-2020-02.jpg",
      description: "The ducal heir of House Atreides who has become a messianic figure to the Fremen."
    },
    {
      name: "Zendaya",
      role: "Chani",
      image: "https://media.allure.com/photos/63973c5c1d6a06ad5b324e7e/16:9/w_2580,c_limit/zendaya%20top%20moments%202022.jpg",
      description: "A mysterious Fremen warrior who appears in Paul's visions and becomes his love interest."
    },
    {
      name: "Rebecca Ferguson",
      role: "Lady Jessica",
      image: "https://www.themoviedb.org/t/p/original/lJloTOheuQSb1FK6boO4R6yEXvX.jpg",
      description: "Paul's mother and a Bene Gesserit who has trained her son in their ways."
    },
    {
      name: "Austin Butler",
      role: "Feyd-Rautha",
      image: "https://variety.com/wp-content/uploads/2024/01/Austin-Butler-Dune.jpg",
      description: "The nephew of Baron Harkonnen and heir to House Harkonnen."
    },
    {
      name: "Florence Pugh",
      role: "Princess Irulan",
      image: "https://www.themoviedb.org/t/p/original/fhEsn35uAwUZy37RKXp7pLuKmPN.jpg",
      description: "The Emperor's daughter whose future becomes intertwined with Paul's destiny."
    },
    {
      name: "Josh Brolin",
      role: "Gurney Halleck",
      image: "https://variety.com/wp-content/uploads/2024/02/Josh-Brolin-Dune.jpg",
      description: "A warrior and mentor to Paul who survived the Harkonnen attack."
    },
    {
      name: "Javier Bardem",
      role: "Stilgar",
      image: "https://www.themoviedb.org/t/p/original/uLZIWm2u00ydbcVgDWQQWC7xuj6.jpg",
      description: "The leader of the Fremen tribe at Sietch Tabr."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="cast-container">
        <h1>Cast & Characters</h1>
        <div className="cast-grid">
          {castMembers.map((member, index) => (
            <div key={index} className="cast-card">
              <div className="cast-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="cast-info">
                <h3>{member.name}</h3>
                <h4>as {member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cast;