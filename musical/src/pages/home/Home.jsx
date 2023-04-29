import CuratedPlaylist from '../../components/CuratedPlaylist'
import MusicToolbar from '../../components/MusicToolbar'
import NewRelease from '../../components/NewRelease'
import Search from '../../components/Search'
import Navbar from '../../components/navbar/Navbar'

import './home.css'

const Home = () => {
  return (
    <main className="home">
      <div className="container home_container">
        {/* nav div */}
        <div className="">
          <Navbar />
        </div>
        {/* body div */}
        <div className="">
          <Search />
          <CuratedPlaylist />
          <NewRelease />
        </div>
      </div>
      <MusicToolbar />
    </main>
  )
}

export default Home
