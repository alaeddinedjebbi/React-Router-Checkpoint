import React from 'react';
import { Navbar , Form , FormControl } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import "./MyNavBar.css"
 

function NavBar ({ getSearchInput, getRateInput }) {
  const ratingChanged = (newRating) => {
    getRateInput(newRating)
  };

  
  const handleSearch = (e) => {
    getSearchInput (e.target.value)
  }
    return (
  <div>
    <Navbar bg="primary" variant="dark" className="MyNavBar">
    <Navbar.Brand href="#home">Club Cinéma Go My Code Béja</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 searchInput" onChange={handleSearch} />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={40}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#FFD700"
        color = "#4B0082"
      />
    </Form>
  </Navbar>

  <br />
  
  </div>
  );
}

export default NavBar; 