import React, { useState } from "react";
import {Button,Form,Row,Col,Container} from "react-bootstrap";

import axios from "axios";
import Movie from "./Movie";


const Main = ()=>{
    
    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState("");

    const [results,setResults] = useState({});

    const handleClick = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=32c20d590617f94bdbbfaad9baf89d61&query=" +
          input
      );
      setMovies(data.results); //llevo al estado todo lo del get de axios
      setResults(data.total_results)
      //ahora el state movie contiene la data de la api
      setInput(""); //seteamos los inputs
    };

    const handleChange = (event) => {
      setInput(event.target.value);
    };
    console.log(input);

    return (
      <>
    
        <div className="header" style={{width:"100%"}}>
          
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
          {/* //cards */}
          <Row>
            {movies.length === 0 ? (
             
                  <Container
                  className="bg-primary text-center text-light"
                  style={{ borderRadius: "10px",height: "28rem" }}
                >
                  <h1 className="mt-5">BuscaPeli O'Matic 3000</h1>
                  <h1 style={{ marginTop: "100px" }}>Podes Buscar la que mas te guste</h1>
                  <h6>Desde Movies API puedes encontrar un gran catalogo de peliculas</h6>
                </Container>
            ) : (
              movies.map((movie, id) => (
                <Col key={id}>
                  <Movie pelicula={movie} results={results} id={id} />
                </Col>
               
              ))
            )}
          </Row>
        </div>
      </>
    );
}
export default Main;