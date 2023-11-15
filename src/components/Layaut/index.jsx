import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components"
const Container=styled.div`

`
const ChildrenContainer =styled.div`
background-color:#131240;
`
const BesicLeaut =({children})=>{
    return <Container>
        <Navbar/>
        <ChildrenContainer>
        {children}
        </ChildrenContainer>
        <Footer/>
    </Container>
}
export default BesicLeaut