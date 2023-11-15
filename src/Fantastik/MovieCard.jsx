import React from "react";
import {Card, CardBody,CardTitle} from "reactstrap"
import { styled } from "styled-components";
const Img =styled('img')`
 width:100%;
`
const MovieCard =({movie})=>{
  
    return(
    <Card style={{
        width: '18rem',
        margin:'20px 20px'
        
        }}>
  <CardBody>
    <CardTitle tag="h5"  >
    {movie.title}
    </CardTitle>
  </CardBody>
  <Img
    alt="Card cap"
    src={movie.backdropPath}
    width="100%"
  />
</Card>)
}

export default MovieCard
