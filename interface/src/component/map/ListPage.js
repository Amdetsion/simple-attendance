import React from 'react'
import styled from 'styled-components'
import Lists from './Lists'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ListPage() {
    return (
        <PPages>
         <Container>
            <Row className='rowss'>
                
                <Col sm={2} className='firstname'>
                    <p className='title'>First Name</p>
                </Col>
                <Col sm={2} className='lastname'>
                    <p className='title'>Last Name</p>
                </Col>
                <Col sm={2} className='phonenumber'>
                    <p className='title'>Phone Number</p>
                </Col>
                <Col sm={2} className='email'>
                    <p className='title'>Email</p>
                </Col>
                <Col sm={2} className='Gender'>
                    <p className='title'>Gender</p>
                </Col>
                
                <Col sm={1} className='Delete'>
                    <p className='title'>
                        delete
                    </p>
                </Col>
            </Row>
            <div className='conta'></div>
         </Container>
     
        <Lists/>
        </PPages>
    )
}

export default ListPage

const PPages=styled.div`
overflow-x: hidden;
margin-top:50px;
 .number{
  margin-left:-30px;
 }
 .title{
    font-size:15px;
 }
 .firstname{
    margin-left:-45px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .firstname{
    margin-left:-5px;
 }
 }
 .lastname{
    margin-left:-50px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .lastname{
    margin-left:60px;
    margin-top:-28px;
 }
 }
 .phonenumber{
    margin-left:-50px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .phonenumber{
    margin-left:120px;
    margin-top:-28px;
 }
 }
 .email{
    margin-left:-30px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .email{
    margin-left:200px;
    margin-top:-28px;
 }
 }
 .Gender{
    margin-left:-50px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .Gender{
    margin-left:260px;
    margin-top:-28px;
 }
 }
 .update{
    margin-left:-30px;
 }
 .Delete{
    margin-left:-0px;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .Delete{
    margin-left:320px;
    margin-top:-28px;
 }
 }
 .conta{
    border-bottom:1px solid black;
    width:1200px;
    margin-left:-50px
 }
 .title{
    font-style:bold;
 }
 @media only screen and (min-width: 300px)and (max-width:490px)  {
    .title{
    font-size:8px;
 }
 }
`