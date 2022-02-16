import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8081/blogs/'

const CompCreateBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios
                    .post(URI, {title, content});
        navigate('/');
    }

    return (

        <div>
                <h3>Create POST</h3>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input 
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            type= 'text'
                            className='form-control'
                        />
                         <label className='form-label'>Content</label>
                        <input 
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                            type= 'textarea'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </form>
        </div>

    )
}

export default CompCreateBlog;