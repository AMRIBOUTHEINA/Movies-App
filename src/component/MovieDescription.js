import React from 'react'
import ReactPlayer from "react-player";
import '../App.css';
import { Link} from 'react-router-dom';
const MovieDescription = ({ movie }) => {
  return (
    <>
      {movie ? 
        <div className="movie-description" >
         
          <h5 style={{color:"brown",marginLeft:500, marginTop:80, fontSize:45}}> Movie Introducing</h5>
          <Link to ="./movies"style={{ marginLeft:30,fontSize:30 }} > Movies: </Link>
          <p style={{color:"red",marginLeft:30,fontSize:35}}>{movie.title}:</p>
          
          <div className="routing">
          
          <p style={{color:"white", marginLeft:30 ,fontSize:25}}> {movie.description} </p>
          
          <ReactPlayer url={movie.trailer} />
          </div>
          </div>
         :
        <p ></p>
      } 
    </>
  )
}

export default MovieDescription;