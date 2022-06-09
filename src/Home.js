import React from 'react'
import {useState,useEffect} from 'react'
import{Row,Col} from 'react-bootstrap'
import UserCard from './UserCard'
import { useNavigate } from "react-router-dom";

function Home()
 {
  const navigate = useNavigate();

    const[user,setUser]=useState([])
    useEffect(()=>{
const fetchData=async()=>{
    await fetch('./api.json')
.then((res)=>res.json())
.then((data)=>setUser(data.userdata))
    }
    fetchData();}
    ,[])
    console.log("data is",user)
  return (
    
    <Row>
 {/* <input */}
        {/* // value={filter} */}
        {/* placeholder='new user..?'
        type='Form' */}
        {/* // onChange={e=>setFilter(e.target.value)}
          // /> */}





{user ? (
    user.map(item=>(
      <Col sm={12} md={8} lg={6} xl={3}>
      <UserCard item={item}/>
      </Col>  ))
):'no data'}
    </Row>
  )
}

export default Home;