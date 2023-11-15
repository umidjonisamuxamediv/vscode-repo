import React, {useState,useEffect} from "react";
import MovieCard from "../MovieCard"
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:1.5rem;
`
const HomePageDefault =()=>{
    const[cartoons,setCartoons]=useState([])
    useEffect(()=>{
        axios.get(`https://jk-tv.netlify.app/cartoons/get_all`).then((data )=>{
            setCartoons(data.data)
            })
    },[])
   
    return( <Container>
        {cartoons.map((movie)=>(
                <MovieCard movie={movie} key={movie.index}/>
                ))}
            </Container>
            )
}

export default HomePageDefault