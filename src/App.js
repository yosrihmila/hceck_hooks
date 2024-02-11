import React, { useState } from 'react';
import Movielist from './Movielist';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer';

function App() {
    const [list,setList]=useState([{name:"Oppenheimer",img:"https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg",rate:"9.5" , video:"https://www.youtube.com/embed/uYPbbksJxIg?si=k5WfaeBslmuvLwh0" },
    { name:"Interstellar",img:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg",rate:"9" ,video:"https://www.youtube.com/embed/zSWdZVtXT7E?si=4LOn4Fbh3aFg8Zf5 "  },
    {name : "The god father", img:"https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg" , rate:"8.5" , video:"https://www.youtube.com/embed/UaVTIH8mujA?si=7SAWS2ioRL4y65Lv" }
])
return (
    <div>
        <Routes>
            <Route path='/' element={<Movielist list={list} setList={setList}></Movielist>} ></Route>

            <Route path='/:id' element={<Trailer list={list}></Trailer>} ></Route>
        </Routes>
    </div>
    )
}

export default App
