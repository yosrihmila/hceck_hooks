import React from 'react' ; 
import { Navbar } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
function Trailer({list}) {

    const {id}=useParams()
return (
    <div>
    <iframe src={list[id].video}  frameborder="0"></iframe>
     
    </div>
)
}

export default Trailer;