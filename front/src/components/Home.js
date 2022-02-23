import axios from 'axios';
import { useState, useEffect } from 'react';


const URI = 'http://localhost:8081/users/home'

const CompHome = () => {

    const [user, setUser] = useState('');

    useEffect(()=>{
        getUser()
    }, []);

    const getUser = async ()=>{
        const res = await axios
                                .get(URI)
        setUser(res.data)
    }

    return (

        <div>
               {
                   user ? <h3>Bienvenido! {user.username }</h3>
                   : null
               } 
                
        </div>

    )
}

export default CompHome;