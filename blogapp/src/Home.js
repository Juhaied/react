import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs,setBlogs] = useState([
    {title: 'Java website for the students',body:'Java course',author:'Juhaied',id:1},
    {title: 'C++ website',body:'Intro to C++ course',author:'Toufique',id:2},
    {title: 'Dot net specialist',body:'From beginner to pro level',author:'Rayhan',id:3}
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog)=> blog.author=== 'Juhaied')} title="Juhaied course" />
    </div>
  )
}

export default Home
