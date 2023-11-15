import React from "react";
import styled from "styled-components"
import { Search } from "react-feather";
const Container = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width: 50%;
&>:hover{
    cursor:pointer;
}
`



const SecondSection=()=>{
    return <Container>
        <Search size={18}/>
    </Container>
}
export default SecondSection