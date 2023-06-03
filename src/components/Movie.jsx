import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Detail from "./Detail";
import { Link } from "react-router-dom";

const Movie = ({pelicula})=>{ 
  

 
  const [detail, setDetail] = useState([]);
  
                                             
  const handleClick = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=32c20d590617f94bdbbfaad9baf89d61&query=" +
        pelicula
    );
    setDetail(data.results); //llevo al estado todo lo del get de axios
    //ahora el state movie contiene la data de la api
  };
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
      {/* Link a detail */}
      <Card.Body>
        <Card.Title>{pelicula.original_title}</Card.Title> 
      {/*  <Card.Title  className="" style={{textDecoration:"none"}} onClick={()=>handleClick}>
        {pelicula.original_title}
        </Card.Title> */}
       {/*  <Link to={`/detail/${pelicula.id}`} style={{ marginTop: "30px" }}>
        {pelicula.original_title}
       
       {detail.map((detalle, id) => (       
                  <Detail pelicula={detalle} key={id} />
              ))}
      </Link> */}
       
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