import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div >


          <h1>Hi Welcome to Online Shoping </h1> 
           <button className='button'><Link to="/Register">SignUp</Link></button>
           <hr/>
           <p>Already registered? <button className='btn'><Link to="/Login">Login</Link></button></p>

        {/* <h1 >Welcome to Dashboard</h1>
        <br/>
        <nav>       
        <ul>       
        
            <button className='first'><Link to="/Login">Login</Link></button>    
            <button className='second'><Link to="/Register">SignUp</Link></button>
        </ul>
    </nav> */}

    </div>
  )
}

export default Home


