import React from 'react';

const Detail = ({detalle}) => {


  return (
    <div style={{backgroundColor:"lightblue"}}>
      <h1 className="text-dark">Hello</h1>
      <h1 className="text-dark">{detalle.overview}</h1>
      {/* <h1 className="text-dark">{detalle.release_date}</h1> */}
    </div>
  )
}
export default Detail;




