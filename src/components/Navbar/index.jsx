import React from "react";
import FeorstSection from "./FeorstSection";
import SecondSection from "./SecondSection";
import styled from "styled-components"

const Conteiner=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: #002333;  
    color: white;
    height:3rem;
    padding:0rem 2rem;  
    `
const Navbarcontainer = ()=>{
    return <Conteiner>
        <FeorstSection/>
        <SecondSection/>
    </Conteiner>
}
export default Navbarcontainer