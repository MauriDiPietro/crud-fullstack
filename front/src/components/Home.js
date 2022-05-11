import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
// import jwt from 'jsonwebtoken';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CompCreateBlog from './CreateBlog.js'


const URI = 'http://localhost:8080/users/token'

const CompHome = () => {
    const {id} = useParams()

    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    // const accToken = async () => {
    //     const data = await axios.get('http://localhost:8081/users/home', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         }
    //     })
        
    //     console.log(data)
    //     if(data.status === 200) {
    //         setUser(data.data)
    //     } else {
    //         alert(data.data.error)
    //     }
    // }

    const refreshToken = async () => {
        try {
            const res = await axios.get(URI)
            setToken(res.data.accessToken)
            const decoded = jwt_decode(res.data.accessToken)
            console.log(decoded)
            setUser(decoded)
        } catch (error) {
            alert(error.message)
            Navigate('/')
        }
    }

    useEffect(()=>{
        // refreshToken()
        getUser()
    }, []);

    const getUser = async ()=>{
        refreshToken()
        const res = await axios.get(`http://localhost:8080/tasks/user/${id}`)
                                console.log(res)
        // setUser(res.data)
    }

    return (
        <div>
<br></br>
<br></br>
<br></br>
               {
                   user ? <h3>Bienvenido {user.username}!</h3> : null
               } 
               {
                   user.postsUser ? user.postsUser.map((p)=>
                   <>
                                            <ul>
                                            <li key={p.id}>{p.title}</li>
                                            <li>{p.content}</li>
                                            </ul>
                    </>
                   ) : null
               }
               <CompCreateBlog user={user} />
               
                
        </div>

    )

}

export default CompHome;