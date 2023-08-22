import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs,setBlogs] = useState([
    {title: 'Java website for the students',body:'Java course',author:'Juhaied',id:1},
    {title: 'C++ website',body:'Intro to C++ course',author:'Toufique',id:2},
    {title: 'Dot net specialist',body:'From beginner to pro level',author:'Rayhan',id:3}
  ]);

  const[name,setName] =useState('Neeha');
  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log(name);
  },[name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={()=>setName('Juhaied')}>Change Name</button>
      <p>{name}</p>
    </div>
  )
}

export default Home
