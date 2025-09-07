
import image from './assets/image.svg'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import {Route, Routes} from 'react-router-dom'
import favicon from './assets/favicon.svg'
function App() {

  return (
    <>  
      <h1>Pingify</h1>
      <span><img src={favicon} alt="" srcset="" width={40}/></span>
            <span><img src={image} alt="" srcset="" width={40}/></span>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path = '/profile' element = {<ProfilePage/>}/>
      </Routes>
        
    </>
  )
}

export default App
