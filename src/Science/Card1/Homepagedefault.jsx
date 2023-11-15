import React, {useState,useEffect} from "react";
import MovieCard from "../MovieCard"
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:1.5rem;
`
const ScinecsContainer =()=>{
    const[scinecs,setScinse]=useState([])
    useEffect(()=>{
        axios.get(`https://jk-tv.netlify.app/science_fiction_movies/get_all`).then((data )=>{
            setScinse(data.data)
            })
    },[])
   
    return( <Container>
        {scinecs.map((movie)=>(
                <MovieCard movie={movie} key={movie.index}/>
                ))}
            </Container>
            )
}

export default ScinecsContainer