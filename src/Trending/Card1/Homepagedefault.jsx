import React, {useState,useEffect} from "react";
import MovieCard from "../MovieCard"
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:1.5rem;
`
const TrendingContainer =()=>{
    const[warMovise,setWarMovise]=useState([])
    useEffect(()=>{
        axios.get(`https://jk-tv.netlify.app/trending_movies/get_all`).then((data )=>{
            setWarMovise(data.data)
            })
    },[])
   
    return( <Container>
        {warMovise.map((movie)=>(
                <MovieCard movie={movie} key={movie.index}/>
                ))}
            </Container>
            )
}

export default TrendingContainer