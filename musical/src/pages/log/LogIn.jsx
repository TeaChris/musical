import { Link } from 'react-router-dom'
import { spotifyApi } from '../../../spotify'

import Navbar from '../../components/navbar/Navbar'

import './login.css'

const LogIn = () => {
  return (
    <main className="login">
      <div className="container loginContainer">
        <Navbar />
        <div className="loginTitle">
          <h2>log in</h2>
          <div className="loginLink">
            <Link to={spotifyApi.authUrl} className="link">
              Log in to spotify
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LogIn
