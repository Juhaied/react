import { useState } from "react"

const Create = () => {

  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[author,setAuthor] = useState('Mario');

  const onSubmit = (e) =>{
    // prevent default

    e.preventDefault();

    const blog = {title,body,author};
  }
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={onSubmit}>
        <label>Blog Title:</label>
        <input
          type="text>"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e)=>setAuthor(e.target.value)} 
        >
          <option value="Juhaied">Juhiaed</option>
          <option value="Neeha">Neeha</option>
        </select>
        <button>Add Button</button>
        
      </form>
    </div>
  )
}

export default Create
