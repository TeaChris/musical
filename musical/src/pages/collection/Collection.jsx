import MusicToolbar from '../../components/MusicToolbar'
import Search from '../../components/Search'
import Navbar from '../../components/navbar/Navbar'
import MyCollection from '../../components/MyCollection'

import './collection.css'

const Collection = () => {
  return (
    <main className="collection">
      <div className="container collectionContainer">
        {/* nav div */}
        <div className="">
          <Navbar />
        </div>
        {/* body div */}
        <div className="">
          <Search />
          <MyCollection />
        </div>
      </div>
      <MusicToolbar />
    </main>
  )
}

export default Collection
