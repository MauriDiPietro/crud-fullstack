import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './components/ShowBlogs.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CompCreateBlog from './components/CreateBlog';
import CompEditBlog from './components/EditBlog';
import CompCreateUser from './components/CreateUser'
import CompLoginUser from './components/LoginUser';
import CompHome from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< CompLoginUser />}  />
                <Route path='/signup' element={< CompCreateUser/>} />
                <Route path='/blogs' element={<CompShowBlogs />} />
                <Route path='/create' element={<CompCreateBlog />} />
                <Route path='/edit/:id' element={<CompEditBlog />} />
                <Route path='/home/:id' element={< CompHome/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
