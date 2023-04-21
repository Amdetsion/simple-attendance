import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import React, { useEffect, useState } from "react";
const List=(props)=> {
    const[add,setAdd]=useState(1)
  
    const history = useNavigate();
  const { _id, vistorFname, vistorLname, phonNumber, email, gender } = props.vistor;
  const deleteHandler = async () => {
    await axios
      .delete(`http://192.168.1.2:80/attendance/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/view"));
  };


    return (
        <Tab>
      
        <Table className='tabrow'>
      
      <tbody >
        <tr className='tabrow'> 
          <td className='tabwidth'><p className='fonttable'>{vistorFname}</p></td>
          <td className='tabwidth'><p className='fonttable'>{vistorLname}</p></td>
          <td className='tabwidth'><p className='fonttable'>{phonNumber}</p></td>
          <td className='tabwidth'><p className='fonttable'>{email}</p></td>
          <td className='tabwidth'><p className='fonttable'>{gender}</p></td>
          
          <td className='tabwidth'>
           <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }} className='buttonss'>
          <p className='buttontext'> Delete</p>
        </Button>
        </td>
        </tr>
        
        
      </tbody>
    </Table>
    </Tab>
    )
}

export default List


const Tab=styled.div`
  overflow-y: hidden;
    margin-right: 80px;
    margin-left: 80px;
    @media only screen and (min-width: 300px)and (max-width:490px)  {
      
      overflow-y: hidden;
      margin-right: 5px;
    margin-left: 5px;
    }
.tabwidth{
    width:130px;
},
.tabwidthf{

    
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
.fonttable{
  font-size:8px;
}
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
.buttonss{
width:35px;
height:20px;
}
}
@media only screen and (min-width: 300px)and (max-width:490px)  {
.buttontext{
  font-size:8px;
  margin-top:-3px;
  margin-left:-6px;
}
}
`;