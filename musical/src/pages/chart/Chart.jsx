import ChartMusics from '../../components/ChartMusics'
import ChartTop from '../../components/ChartTop'
import MusicToolbar from '../../components/MusicToolbar'
import Search from '../../components/Search'
import Navbar from '../../components/navbar/Navbar'

import './chart.css'

const Chart = () => {
  return (
    <main className="chartTop">
      <div className="container chartContainer">
        <div className="">
          <Navbar />
        </div>
        <div className="chartRight">
          <Search />
          <ChartTop />
          <ChartMusics />
        </div>
      </div>
      <MusicToolbar />
    </main>
  )
}

export default Chart
