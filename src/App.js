import  React, { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Add from './component/Add';
import Filter from './component/Filter';
import { uuid } from 'uuidv4';
const App =()=> {
  const [keyword,setKeyword] = useState("")
  const [rate, setRate] = useState(1)
  const [movies, setMovies] = useState([
  
    {
      id:uuid (),
      title: '  The Nevers',
      year: 'Year: 2021',
      
      genre:' Genre: Action, Drama, Fantasy',
      poster: 'https://m.media-amazon.com/images/M/MV5BODEyOWY2ZDctOGI3Zi00YjYwLWIwZDEtMzJlY2VhYTA2N2ViXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: ' Description: An epic tale following a gang of Victorian women who find themselves with unusual abilities, relentless enemies, and a mission that might change the world.',
      stars: ' Stars:  Laura Donnelly, Ann Skelly, Olivia Williams, James Norton',
      rating: '7'

    },
    {
      id:uuid(),
      title: 'The Crown',
      year: 'Year: 2016',
     
      genre:'Genre: Biography, Drama, History',
      poster: 'https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Description: Follows the political rivalries and romance of Queen Elizabeth It is reign and the events that shaped the second half of the twentieth century.',
      stars: 'Stars: Claire Foy, Olivia Colman, Imelda Staunton, Matt Smith',
      rating: '5'

    },
    { id:uuid(),
      title: ' Innocent',
      year: 'Year: 2021',
      
      genre:'Genre: Crime, Drama, Mystery',
      poster: 'https://m.media-amazon.com/images/M/MV5BZTRkNzUxYWItYTc5OS00MDM4LTg1OGMtZTQ1NmI1ZGQ4MDU0XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Description: An accidental killing leads a man down a dark hole of intrigue and murder. Just as he finds love and freedom, one phone call brings back the nightmare.',
      stars:"Stars: Mario Casas, Xavi Sáez, Santi Pons, Sam Feuer",
      rating: '6'

    },
    { id:uuid(),
      title: '  The Walking Dead',
      year: 'Year: 2010',
      
      genre:' Genre:| Drama, Horror, Thriller ',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: ' Description:Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive. ',
      stars: ' Stars:   Andrew Lincoln, Norman Reedus, Melissa McBride, Lauren Cohan',
      rating: '4'

    },
    

  ]);
 
  const  search=(text)=>{
    setKeyword(text)
    
      }
     const handleRating=(number)=>{
    setRate(number)
    
      }
    
      const addMovie =(newMovie)=>setMovies([...movies,newMovie])
    
      return (
        <div className="app"> 
    
        
        <div className="minapp">
        <h2 style={{ color:'black', marginLeft:50}}> Click a name of movie here:  </h2>
        <Filter search={search}  handleRating={handleRating} />
        <Add addMovie={addMovie}/>
        </div>
        <MovieList movies = {movies.filter( el=> el.title.toLowerCase().includes(keyword.toLowerCase().trim())&& el.rating>=rate) } />
      
        </div>
      );
    };
    
    export default App;
