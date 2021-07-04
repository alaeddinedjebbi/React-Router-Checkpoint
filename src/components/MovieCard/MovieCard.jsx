import React from 'react'
import ReactStars from 'react-stars'
import { Card, Button } from 'react-bootstrap'

function MovieCard({ movie }) {
    return (
        <div>
            <Card style={{ width: "18rem", height:"35rem" }}>
            <Card.Img variant="top" src={movie.posterUrl} height="60%" />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
            {movie.description}
            </Card.Text>
            <ReactStars
                count={5}
                value={movie.Rating}
                size={40}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FFD700"
                color = "#4B0082"
                edit={false}
            />
            </Card.Body>
            <Card.Footer>
            <Button variant="primary">Télécharger</Button>
            </Card.Footer>
            </Card>

        </div>
    )
}




export default MovieCard
