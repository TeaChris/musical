import { AiOutlineHeart } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { chart } from '../data'

const ChartMusics = () => {
  return (
    <div className="chartMusics">
      {chart.map((item) => {
        const { img, time, id, album, title } = item
        return (
          <div className="chartMusic" key={id}>
            <div className="imgIcon">
              <div className="imgIc">
                <img src={img} alt={title} />
                <AiOutlineHeart />
              </div>
              <span>{title}</span>
            </div>
            <div className="chartAlbum">
              <span>{album}</span>
            </div>
            <div className="">
              <span className="time">{time}</span>
            </div>
            <div className="">
              <CiMenuKebab style={{ color: '#facd66' }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ChartMusics
