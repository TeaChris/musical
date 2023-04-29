import CuratedPlaylist from '../../components/CuratedPlaylist'
import Search from '../../components/Search'
import Navbar from '../../components/navbar/Navbar'

import './home.css'

const Home = () => {
  return (
    <main>
      <div className="container home_container">
        {/* nav div */}
        <div className="">
          <Navbar />
        </div>
        {/* body div */}
        <div className="">
          <Search />
          <CuratedPlaylist />
        </div>
      </div>
    </main>
  )
}

export default Home
