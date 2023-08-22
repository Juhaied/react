const Home = () => {
  const handleClick = () =>{
    console.log('CLicked');
  }
 
  return (
    <div className="home">
        <h2>Homepage</h2>
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
