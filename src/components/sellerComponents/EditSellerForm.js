import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { useLocation, useParams } from 'react-router-dom'

export default function EditSellerForm()
{ 
    let sname = useRef();
    let ssname = useRef();
    let saddress = useRef();
    let spostcode = useRef();
    let phone = useRef();
const {sellerId}  = useParams();

function generateseller()
{
    fetch(`http://localhost:3000/seller/${sellerId}`, {
      method: "GET"
    }).then(response =>response.json()).then((data=>{
        sname.current.value = data.firstName;
        ssname.current.value = data.surname;
        saddress.current.value = data.address;
        spostcode.current.value = data.postcode;
        phone.current.value = data.phone;
      
    }))
}
useEffect(()=>generateseller(),[])
    return(
        <div className='sedit'>
            <input type='text' className='selleri' ref={sname}></input>
            <input type='text' className='selleri' ref={ssname}></input>
            <input type='text' className='selleri' ref={saddress}></input>
            <input type='text' className='selleri' ref={spostcode}></input>
            <input type='text' className='selleri' ref={phone}></input>

            
            
        </div>

    )
    


}