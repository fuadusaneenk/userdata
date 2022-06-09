import React from 'react'
import{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
    const[details,setDetails]=useState([])
    const{first}=useParams()
    useEffect(()=>{
        const fetchData=async()=>{
            await fetch('./api.json')
            .then((res)=>res.json())
            .then((data)=>setDetails(data.userdata))
        }
        fetchData();
    },[]
    )
    const userData=details.find(item=>item.name=first)
    console.log(userData)
  return (
    <div>hi</div>
  )
}

export default UserDetails