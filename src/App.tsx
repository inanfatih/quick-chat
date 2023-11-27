import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './header/Header'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={
                <div className='home'>
                  <h2>Welcome to QuickChat</h2>
                  <p>The quickest way to chat with your customers</p>
                  <nav className='buttons'>
                    <Link to='/login' className='button'>
                      Log in
                    </Link>
                    <Link to='/register' className='button'>
                      Sign up
                    </Link>
                  </nav>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
