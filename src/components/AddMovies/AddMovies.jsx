import React, {useState} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

function AddMovies({getNewMovie, moviesData}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie, setNewMovie] = useState ({title:"", descrption:"", posterUrl:"", Rating:0})
    const handleChange = (e) => (
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    )
    const handleSubmit =()=>{
        getNewMovie([...moviesData, newMovie])
        handleClose()
      }    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add new movies
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your new movies data :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Control type="texte" placeholder="Enter title....." name="title" onChange ={handleChange}/>
          <Form.Control type="texte" as="textarea" placeholder="Enter description....." name="description" onChange ={handleChange} />
          <Form.Control type="texte" placeholder="Enter posterUrl....." name="posterUrl" onChange ={handleChange} />
          <Form.Control type="number" placeholder="Enter number of rating" name="Rating" onChange ={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Add Movies
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddMovies
