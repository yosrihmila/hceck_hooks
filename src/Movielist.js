import React, { useRef, useState } from 'react'
import Moviecard from './Moviecard'
import AddMovie from './Addmovie'

function Movielist() {
    const [list,setList]=useState([{name:"Oppenheimer",img:"https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg",rate:"9.5"},
    {name:"Interstellar",img:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg",rate:"9"},
    {name : "The god father", img:"https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg" , rate:"8.5"}
])
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
    {filtredMovie.map(e=><Moviecard item={e}></Moviecard>)}
    <AddMovie list={list} setList={setFiltred}></AddMovie>
    </div>

    </div>
)
}

export default Movielist;