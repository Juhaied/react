import { useState } from "react"
import {useHistory} from "react-router-dom"

const Create = () => {

  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[author,setAuthor] = useState('Mario');

  const history = useHistory();

  //it is for showing loading
  const[isPending,setIsPending] = useState(false);

  const onSubmit = (e) =>{
    // prevent default

    e.preventDefault();

    const blog = {title,body,author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('New blog added');
      setIsPending(false);

      history.push('/');
    });

    setTitle('')
    setBody('')
    setAuthor('')
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
          <option value="HEy">Hey</option>
        </select>
       {!isPending &&<button>Add Button</button>}
       {isPending &&<button disabled>Adding Blog</button>}
      </form>
    </div>
  )
}

export default Create
