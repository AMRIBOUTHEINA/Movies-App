import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

const Filter = ({search,handleRating}) => {
    
    return (
        
        <div className='movie-list'>
          < input style={{backgroundColor:"burlywood",marginLeft:"50px"}}  type="text" onChange={(e)=>search(e.target.value) }/>
          <div className="footer" style={{backgroundColor:"burlywood",marginLeft:"50px"}}>
          <StarRatingComponent 
          starCount={8}
          onStarClick={(value)=>handleRating(value)}
          >
          </StarRatingComponent>
          </div>
          

        </div>
    )
}

export default Filter ;