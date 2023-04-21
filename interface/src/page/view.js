import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import {AiOutlineArrowLeft } from "react-icons/ai";
import 'animate.css';


function View() {
    return (
        <Info>
        <h1 className='sucess'>Successfully Registered</h1>
        <Button variant="primary" className='Buttons' href="/"><AiOutlineArrowLeft className='arow' class="animate__animated animate__headShake animate__infinite	infinite"/>Back to Register</Button>{' '}



        </Info>
    )
}

export default View

const Info=styled.div`

.sucess{
    margin-left:450px;
    margin-top:100px;
    color:blue;
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
    .sucess{
    margin-left:25px;
}
    
}
.Buttons{
    width:250px;
    height:45px;
    margin-left:530px;
    margin-top:20px;
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
    .Buttons{
    margin-left:50px;
}
}

.arow{
    margin-left:-30px;
    color:red;
    font-size:25px
}

`