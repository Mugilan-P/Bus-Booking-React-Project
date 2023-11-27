import {BrowserRouter ,Link,Routes,Route} from 'react-router-dom'
import Home from './homepage'
import Login from './loginformproject'
import Register from './registerproject'
// import Login from '../mui/login'
// import Home from '../mui/Home'
// import Register from '../mui/register'
export default function Navigation()
{
   return(
    <div>
    <div>
        <nav className="navbar nav-expand-lg bg-light shadow" style={{backgroundImage:'url("https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png")', 
     backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <ul className="navbar nav w-100">
                <li className="nav-item">
                    <Link to="/home" className='nav-link' style={{color:"white"}}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/contactus" className='nav-link' style={{color:"white"}}>ContactUs</Link>
                </li>

                <li className="nav-item">
                <Link to="/booking" className='nav-link' style={{color:"white"}}>Booking</Link>
                </li>
                
                <li className="nav-item ms-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </li>

                <li className="nav-item" style={{marginLeft:".5rem"}}>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </li>

                <li className="nav-item ms-auto" style={{color:"white"}}>
                    <Link to="/login" className='nav-link' style={{color:"white"}}>Login</Link>
                </li>

                <li className="nav-item" >
                    <Link to="/register" className='nav-link' style={{color:"white"}}>Register</Link>
                </li>
                
                <li className="nav-item">
                <img
                style={{ width: '50px', height: '50px', borderRadius:'50px'}}
                // src="https://img.freepik.com/premium-vector/design-logo-travel-bus-vector-illustration_831416-160.jpg?w=826"
                src="https://t4.ftcdn.net/jpg/03/01/82/47/240_F_301824765_o5VJVEp69miDvPJV5SPGSSGn8idWFbMu.jpg"
                />
                </li>
            </ul>
        </nav>

        {/* <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register />} />
        </Routes> */}
    </div>
    </div>
)
}
