import { useState } from "react";

const Home = () => {
  
  const [blogs,setBlogs] = useState([
    {title: 'Java website for the students',body:'Java course',author:'Juhaied',id:1},
    {title: 'C++ website',body:'Intro to C++ course',author:'Toufique',id:2},
    {title: 'Dot net specialist',body:'From beginner to pro level',author:'Rayhan',id:3}
  ]);

  return (
    <div className="home">
       {blogs.map((blog) =>(
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </div>
       ))}
    </div>
  )
}

export default Home
