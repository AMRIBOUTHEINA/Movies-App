
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => (
   <Card style={{ width: 300, height:650, backgroundColor:"greenyellow " }}>
            <Card.Img style={{height: 270}} src={movie.poster} alt=""  />
            <Card.Body>
            <Card.Title style={{color:"red",fontSize:22}}> {movie.title} </Card.Title>
            <Card.Text style={{fontSize:14,color:"black"}}>{movie.year} </Card.Text>
            <Card.Text style={{fontSize:14,color:"black"}}>{movie.type} </Card.Text>
            <Card.Text style={{fontSize:14,color:"black"}}>{movie.genre} </Card.Text>
            <Card.Text style={{fontSize:14,color:"black" }}>{movie.stars} </Card.Text>
            <Card.Text style={{fontSize:12,color:"black"}}>{movie.description}<br/>  <Button style={{marginTop:12,backgroundColor:'burlywood',color:'black'}}>Save as </Button></Card.Text>
            </Card.Body>

            <Card.Body>
            <Card.Link style={{fontSize:25}} >
            <StarRatingComponent 
              name="rate1" 
              starCount={8}
              value={movie.rating} 
        />
            </Card.Link>   
                
            </Card.Body>
            </Card>
          
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;