// import { useGetTopChartsQuery } from '../redux/services/spotifyApi'
import { topChart } from '../data'

import { AiOutlineHeart } from 'react-icons/ai'

const TopChart = () => {
  // const { data } = useGetTopChartsQuery()
  // console.log(data)

  return (
    <aside className="topChart">
      <h3>top charts</h3>
      <div className="top_chart">
        {topChart.map((chart) => {
          const { id, image, title, artist, time } = chart
          return (
            <article key={id} className="topChart_article">
              {/* left */}
              <div className="topChart_left">
                <div className="topChart_img">
                  <img src={image} alt={title} />
                </div>
                <div className="topChart_text">
                  <h5>{title}</h5>
                  <small>{artist}</small>
                  <p>{time}</p>
                </div>
              </div>
              {/* right */}
              <span className="topChart_icon">
                <AiOutlineHeart />
              </span>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default TopChart
