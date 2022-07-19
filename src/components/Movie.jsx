import React from "react";
import { Card } from "react-bootstrap";

const Movie = ({pelicula})=>{ 
  console.log(pelicula);
return <div>

    
  <Card style={{ width: '18rem',height:"1000px" }} className="bg-dark text-light">
  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original'+ pelicula.poster_path} />
  <Card.Body>
    <Card.Title>{pelicula.original_title}</Card.Title>
    <Card.Title>Lanzamiento: {pelicula.release_date}</Card.Title>
    <Card.Text>
     {pelicula.overview}
    </Card.Text>
    <Card.Text>
     Voto:{pelicula.vote_average}
    </Card.Text>
    
  </Card.Body>
</Card>
</div>;

}
export default Movie;