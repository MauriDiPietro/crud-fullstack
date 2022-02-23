import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8081/users/signup'

const CompCreateUser = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        await axios
                    .post(URI, {username, password});
        navigate('/login');
    }

    return (

        <div>
                <h3>SIGNUP</h3>
                <form onSubmit={signup}>
                    <div className='mb-3'>
                        <label className='form-label'>Username</label>
                        <input 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            type= 'text'
                            className='form-control'
                        />
                         <label className='form-label'>Password</label>
                        <input 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type= 'password'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>SignUp!</button>
                </form>
        </div>

    )
}

export default CompCreateUser;