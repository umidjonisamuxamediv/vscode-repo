import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
width: 50%;
display:flex;
align-items: center;
&:hover{
    cursor:pointer;
}
`
const Tytle =styled.p`
font-size:'14px';
margin:0rem 2rem;
`
const Logo = styled.div`
color:red;
font-size:28px;
font-weight:800;

`
const Tytles =['War_movise', 'Trending','cartoons','Top','Zombie','Popular','Trending','Fantasy','Science']
const FeorstSection= ()=>{
    const naviget=useNavigate()
    const handleTitleClick =(el)=>{
        naviget(el.toLowerCase())
    }
    return <Container>
        <Logo onClick={()=>handleTitleClick('/')}>M</Logo>
        {Tytles.map((el)=>(
        <Tytle onClick={()=>handleTitleClick(el)} key={el.index}>{el}</Tytle>
        ))}
    </Container>
}
export default FeorstSection