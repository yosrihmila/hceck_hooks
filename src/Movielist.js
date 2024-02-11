import React, { useRef, useState } from 'react'
import Moviecard from './Moviecard'
import AddMovie from './Addmovie'
import { NavLink } from 'react-router-dom'

function Movielist({list,setList}) {
    
const [filtredMovie,setFiltred]=useState(list)
const R5=useRef()
const filterMovies=()=>{
    const filtredList=list.filter(e=>e.name.toUpperCase().includes(R5.current.value.toUpperCase()))
    setFiltred(filtredList)
}
return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",padding:"2vw",gap:"40px"}}>
    <h3>Movies</h3>
    <input ref={R5} type='text' placeholder='search for a movie' onChange={filterMovies}></input>
    <div style={{display:"flex" ,gap:"20px"}}>
    {filtredMovie.map((e,index)=> <NavLink to={"/"+index} > <Moviecard item={e}></Moviecard> </NavLink> )}
    <AddMovie list={list} setList={setFiltred}></AddMovie>
    </div>
  
    </div>
)
}

export default Movielist;