import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar1 from './NavBar';

const URI = 'http://localhost:8080/tasks'

const CompCreateBlog = ({user}) => {
    const {id} = useParams()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId] = useState(id)
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {title, content, userId});
                    console.log(title, content, userId)
        navigate(`/home/${id}`);
    }

    return (

        <div>
            <Navbar1 />
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