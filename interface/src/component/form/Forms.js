import React, { useState,useEffect } from "react";
import Amde from './forms.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import styled from 'styled-components';



function Forms() {
  const {useid}=useParams()
  const history = useNavigate();
  const [user, setUser] = useState();
  const [select,setSelect]=useState();

  const [inputs, setInputs] = useState({

    vistorFname:"",
    vistorLname:"", 
    phonNumber:"",
     email:"",
     gender:"", 
       });
       const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
         console.log(e.target.name, "Value", e.target.value);
      };
      const sendRequest = async () => {
        await axios
          .post("http://192.168.1.2:80/attendance", {
            
          vistorFname:String(inputs.vistorFname),
          vistorLname:String(inputs.vistorLname), 
          phonNumber:Number(inputs.phonNumber),
          email:String(inputs.email),
          gender:String(inputs.gender), 
            
          })
          .then((res) => res.data);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/view"));
      };
    return (
      <Myform>
        <Container className="conta"> 
        <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Row>
        <Col sm={3}>
        <Form.Label className="lables">First Name</Form.Label>
        </Col>
        <Col sm={6}>
        <Form.Control type="text" placeholder="Enter First Name" className="forms" value={inputs.vistorFname} name="vistorFname" onChange={handleChange} />
        </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
          <Col sm={3}>
        <Form.Label className="lables">Last Name</Form.Label>
        </Col>
        <Col sm={6}>
        <Form.Control type="text" placeholder="Enter First Name"  className="forms" value={inputs.vistorLname} name="vistorLname" onChange={handleChange} />
        </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
          <Col sm={3}>
        <Form.Label className="lables">Phone Number</Form.Label>
        </Col>
        <Col sm={6}> 
        <Form.Control type="text" placeholder="Enter Phone Number"  className="forms" value={inputs.phonNumber} name="phonNumber" onChange={handleChange} />
        </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
          <Col sm={3}>
        <Form.Label className="lables">Email address</Form.Label>
        </Col>
        <Col sm={6}>
        <Form.Control type="email" placeholder="Enter email"  className="forms" value={inputs.email} name="email" onChange={handleChange}/>
        </Col>
        </Row>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
        <Col sm={3}>
        <Form.Label className="lables">Gender</Form.Label>
        </Col>
        <Col sm={6}>
        <Form.Control type="text" placeholder="male/female"  className="forms" value={inputs.gender} name="gender" onChange={handleChange} />
        </Col>
        </Row>
      </Form.Group>
    
      <Button variant="primary" type="submit" className="button" >
        Submit
      </Button>
    </Form>
    </Container>
    </Myform>
    )
}

export default Forms


const Myform=styled.div`

.conta{
    margin-top: 130px;
    margin-left: 450px;
    
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
  .conta{
    margin-top: 130px;
    margin-left: 100px;
    
}
}

.forms{
    border-color:blue;
    margin-left: -140px;
    width: 320px;
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
  .forms{
    border-color:blue;
    margin-left: -40px;
    width: 220px;
}
}

.lables{
    color: blue;
}
.button{
    width: 160px;
    margin-left: 180px;
    margin-top: 20px;
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
  .button{
    
    margin-left: -5px;
   
}
}
.button:hover{
    background-color: aqua;
}


`