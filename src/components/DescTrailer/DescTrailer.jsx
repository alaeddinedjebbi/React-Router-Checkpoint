import React from 'react'
import './DescTrailer.css'
import { Button} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function DescTrailer({moviesData}) {
    const { id } = useParams ()
    const movie = moviesData.find( movie=> id == movie.id)
    return (
        <div className="description">
            <iframe 
            width="727" 
            height="409" 
            src={movie.trailerUrl}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            ></iframe>
            <p>{movie.description} </p>
            <Link to='/'>
            <Button variant="warning">Back To Home</Button>
            </Link>
        </div>
    )
}

export default DescTrailer
