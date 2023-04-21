import React from 'react'
import Forms from '../component/form/Forms'
import Par from '../component/form/Par'
import styled from 'styled-components'

function Add() {
    return (
        <Adding>
        <div>
       
        <Forms/>
        <div  className='addpar'>
        <Par/>
        </div>
        </div>
        </Adding>
    )
}

export default Add

const Adding =styled.div`
overflow-x: hidden;
.addpar{
    margin-top:300px;
}
`