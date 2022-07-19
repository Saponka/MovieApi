import React, { useState } from "react";
import {Button,Form,Row,Col,Container} from "react-bootstrap";

import axios from "axios";
import Movie from "./Movie";

const Main = ()=>{
    
    const[movies,setMovies]= useState([]);
    const[input, setInput]= useState("");
 /* const state = useState("")
    const input = state[0]
    const setInput = state[1]
 */

const handleClick= async()=>{
    const {data} = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=32c20d590617f94bdbbfaad9baf89d61&query=" + input)
    setMovies(data.results)
    setInput("")
}

const handleChange=(event)=>{
setInput(event.target.value) }
console.log(input);

    return(
        <>
        <Container className="bg-success text-center text-light">
          <h1>Movies API</h1>
          <p>
            Pequeña api para buscar las peliculas que mas te gustan 
          </p>
        </Container>
      <div>
          <Form.Group className=" mb-3 w-50" style={{ margin: 'auto' }}>
            <div className="d-flex align-items-center">
            <Form.Label className="mt-1 "style={{marginRight:"8px"}}>Pelicula:</Form.Label>
              <Form.Control value={input} onChange={handleChange} placeholder="Buscar..." />
              <Button variant="outline-primary" style={{marginLeft:"8px"}} onClick={handleClick}>Buscar</Button>
            </div>
          </Form.Group>
          <Row>
            {movies.map((movie, index) => (
              <Col key={index}>
                <Movie pelicula={movie} /><br/>
              </Col>
            ))}

          </Row>
        </div></>
    )
}
export default Main;