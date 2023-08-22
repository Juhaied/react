import { useState } from "react";

const Home = () => {

    const[name,setName] = useState('mario');
    const handleClick = () =>{
        setName('Juhaied');
    }
 
  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}> {/* This is function call without parameters*/}
            Click
        </button>

        {/*

         const handleClickAgian = (name) =>{
                    console.log('handle click agained by '+name);
                }

        <button onClick={() => {handleClickAgian('nabid')}}> {/* This is function call with parameters*
           Click
        </button>   
        */}
    </div>
  )
}

export default Home
