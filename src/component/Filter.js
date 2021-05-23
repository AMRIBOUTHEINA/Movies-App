import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

const Filter = ({search,handleRating}) => {
    
    return (
        
        <div className='movie-filter'>
          < input style={{backgroundColor:"burlywood",marginLeft:50, borderStyle:'solid' ,borderSize:3 ,borderColor:'brown', height:35}} placeholder="Set your movie" type="text" onChange={(e)=>search(e.target.value) }/>
          <div className="footer" style={{backgroundColor:"burlywood",marginLeft:"70px",width:"100",height:"30", borderStyle:"solid",borderSize:"0 ",borderColor:"brown"  }}>
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