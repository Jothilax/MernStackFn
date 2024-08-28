import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'

function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
            </Routes> 
      </BrowserRouter>
    
  )
}

export default App

































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div>
//       <BrowserRouter>
//       <Routes>
//                 <Route path="/register" element={<Signup />} />
//                 {/* <Route path="/login" element={<LoginForm />} /> */}
//             </Routes> 
//       </BrowserRouter>
//      </div>
//     </>
//   )
// }

// export default App
