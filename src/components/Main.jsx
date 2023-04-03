import React, { useState } from "react";
import {Button,Form,Row,Col,Container} from "react-bootstrap";

import axios from "axios";
import Movie from "./Movie";


const Main = ()=>{
    
    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState("");

    const handleClick = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=32c20d590617f94bdbbfaad9baf89d61&query=" +
          input
      );
      setMovies(data.results); //llevo al estado todo lo del get de axios
      //ahora el state movie contiene la data de la api
      setInput(""); //seteamos los inputs
    };

    const handleChange = (event) => {
      setInput(event.target.value);
    };
    console.log(input);

    return (
      <>
        <Container
          className="bg-primary text-center text-light"
          style={{ borderRadius: "10px" }}
        >
          <h1>BuscaPeli O'Matic</h1>
          <h6>Movies API</h6>
        </Container>
        <div>
          //buscador
          <Form.Group className=" mb-3 w-50" style={{ margin: "auto" }}>
            <div className="d-flex align-items-center">
              <Form.Label className="mt-1 " style={{ marginRight: "8px" }}>
                Pelicula:
              </Form.Label>
              <Form.Control
                value={input}
                onChange={handleChange}
                placeholder="Buscar..."
              />
              <Button
                variant="outline-primary"
                style={{ marginLeft: "8px" }}
                onClick={handleClick}
              >
                Buscar
              </Button>
            </div>
          </Form.Group>
          //cards
          <Row>
            {movies.length === 0 ? (
              <Container
                className="bg-dark text-center text-light"
                style={{ height: "450px" }}
              >
                <h1 style={{ marginTop: "100px" }}>Busca la que te guste</h1>
              </Container>
            ) : (
              movies.map((movie, index) => (
                <Col key={index}>
                  <Movie pelicula={movie} />
                </Col>
               
              ))
            )}
          </Row>
        </div>
      </>
    );
}
export default Main;