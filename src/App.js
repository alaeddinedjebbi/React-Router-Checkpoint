import './App.css';
import MovieList from './components/MovieList/MovieList'
import NavBar from './components/NavBar/NavBar'
import AddMovies from './components/AddMovies/AddMovies'
import DescTrailer from './components/DescTrailer/DescTrailer';
import React,{useState, Fragment} from 'react';
import { Switch, Route} from "react-router-dom";




function App() {
  let movies =[
    {
      id: 1,
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      Rating : 5,
      trailerUrl : "https://www.youtube.com/embed/3gK_2XdjOdY",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      Rating : 4,
      trailerUrl : "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: 3,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      Rating : 3,
      trailerUrl : "https://www.youtube.com/embed/sY1S34973zA",
    },
    {
      id: 4,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      Rating : 2,
      trailerUrl : "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id: 5,
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      Rating : 5,
      trailerUrl : "https://www.youtube.com/embed/_13J_9B5jEk",
    },
    {
      id: 6,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      Rating : 1,
      trailerUrl : "https://www.youtube.com/embed/gG22XNhtnoY",
    },
    {
      id: 7,
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
      Rating : 2.5,
      trailerUrl : "https://www.youtube.com/embed/s7EdQ4FqbhY",
    },
    {
      id: 8,
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
      Rating : 3.5,
      trailerUrl : "https://www.youtube.com/embed/r5X-hFf6Bwo",
    },
  ];
  const [moviesData, setMoviesData] = useState(movies);

  const [searchInput, setSearchInput] = useState ("");
  const [rateInput, setRateInput] = useState (0);

  const getSearchInput = (input) => {
    setSearchInput(input);
  };
  const getRateInput = (input) => {
    setRateInput(input);
  };
  const getNewMovie =(newMovie) =>{
    setMoviesData([...moviesData, newMovie]);
  }


  return (
    
      <div className="App">
        
        <Switch>
        <Route 
        path="/description/:id" 
        render={ ()=> <DescTrailer moviesData={moviesData} />} />
        <Route path="/" render={ ()=> (
          <Fragment>
          <NavBar 
          getSearchInput={getSearchInput}
          getRateInput={getRateInput}
          />
          <div className="addMovie">
          <AddMovies getNewMovie={getNewMovie} />
          </div>
          <MovieList 
          moviesData={moviesData} 
          searchInput={searchInput} 
          rateInput={rateInput}
          />
        </Fragment>
        )}/>
        </Switch>
      </div>
    
  );
}

export default App;
