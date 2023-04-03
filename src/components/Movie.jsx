import React from "react";
import { Card } from "react-bootstrap";

const Movie = ({pelicula})=>{ 
  
  console.log(pelicula);
return (
  <div>
    <Card
      style={{ width: "18rem",border: "transparent"}}
      className="bg-dark text-light  "
    >
      <Card.Img
        variant="top"
        src={"https://image.tmdb.org/t/p/original" + pelicula.poster_path}
      />
      <Card.Body>
        <Card.Title>{pelicula.original_title}</Card.Title>
        <Card.Title>Lanzamiento: {pelicula.release_date}</Card.Title>
        <Card.Text>{pelicula.overview}</Card.Text>
      <Card.Img
        variant="top"
        src={"https://image.tmdb.org/t/p/original" + pelicula.backdrop_path}
      />
        <Card.Text> Promedio: {pelicula.vote_average}</Card.Text>
        <Card.Text> Votos: {pelicula.vote_count}</Card.Text>
      </Card.Body>
    </Card>
    <hr className="text-light"/>
  </div>
);

}
export default Movie;