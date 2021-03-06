
import React, { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";
import { uuid } from 'uuidv4';
import 'bootstrap/dist/css/bootstrap.min.css';
const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setId('')
        setPoster('')
        setTrailer('')
        setTitle('')
        setYear('')
        setGenre('')
        setStars('')
        setDescription('')
        setRating('')
        setShow(false)
    };
  const handleShow = () => setShow(true);
  
  
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [trailer, setTrailer] = useState('');
  const [id, setId] = useState(uuid());
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [stars, setStars] = useState('');
  const [rating, setRating] = useState(0);

  const handleSave =()=>{

      addMovie({
        title,
        year,
        id,
        genre,
        poster,
        trailer,
        description,
        stars,
        rating
      })
      handleClose()
  }

    return (
      <>
          <Button style={{ borderStyle:"solid" ,borderSize:"1" ,borderColor:"black" ,backgroundColor:"burlywood",fontSize:22,color:"black",marginLeft:"200px",height:"45px"}}  variant="primary" onClick={handleShow}>
        Add your movie
      </Button>
  
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title style={{backgroundColor:"burlywood"}}>Fill in the boxes </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"burlywood"}}>
          <Form.Control placeholder="poster" onChange={(e)=>setPoster(e.target.value)} style={{backgroundColor:"burlywood"}} />
          <Form.Control placeholder="trailer" onChange={(e)=>setTrailer(e.target.value)} style={{backgroundColor:"burlywood"}} />
          <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)} style={{backgroundColor:"burlywood"}} />
          <Form.Control placeholder="Year" onChange={(year)=>setYear(year.target.value)} style={{backgroundColor:"burlywood"}} />
          
          <Form.Control placeholder="Genre" onChange={(genre)=>setGenre(genre.target.value)} style={{backgroundColor:"burlywood"}} />
          <Form.Control placeholder="Stars" onChange={(stars)=>setStars(stars.target.value)} 
          style={{backgroundColor:"burlywood"}} />
          <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setDescription(e.target.value)}style={{backgroundColor:"burlywood"}}  />
          <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}style={{backgroundColor:"burlywood"}}  />
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"burlywood"}}  >
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} style={{backgroundColor:"burlywood"}}  >
          
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  };
  
  export default Add;