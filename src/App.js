import logo from './logo.svg';
import './App.css';
import { useReducer, useRef, useState } from 'react';

function App() {
  const [list,setList]=useState([
    {name:"Oppenheimer",image:"https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg",rate:"9"},
    {name:"The god father",image:"https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg", rate:"8"},
    {name:"Interstellar",image:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg", rate:"9"},])
  const p1=useRef()
  const p2=useRef()
  const p3=useRef()

  const add=()=>{
    setList([...list,
      {
        name:p1.current.value,
        rate:p2.current.value,
        image:p3.current.value
      }
    ])
  }
  return (
    <div className="App">
      <input type={"text"} ref={p1} placeholder='name movie'></input>
      <input type={"text"} ref={p2} placeholder='rate movie'></input>
      <input type={"text"} ref={p3} placeholder='image link'></input>
      <button onClick={add}>+</button>
      <br />
      {list.map(e=><p>{e.name}
      {e.rate}
      <img src={e.image}></img>
      </p>)}
    </div>
  );
}

export default App;
