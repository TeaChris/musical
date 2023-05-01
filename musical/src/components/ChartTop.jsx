import { BsFillPlayFill, BsMusicNoteBeamed } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import img from '../assets/top-chart-3.png'

const ChartTop = () => {
  return (
    <div className="chartTop">
      <img src={img} alt="artist image" />
      <div className="chartDetails">
        <div className="artistDetails">
          <h3>Tomorrow’s tunes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus
          </p>
          <span>64 songs ~ 16 hrs+</span>
        </div>
        <div className="chartTopIcons">
          <div className="firstIcon">
            <BsFillPlayFill
              style={{
                display: 'grid',
                placeItems: 'center',
                background: '#facd66',
                borderRadius: '50%',
              }}
            />
            <span> play all</span>
          </div>
          <div className="secondIcon">
            <BsMusicNoteBeamed
              style={{
                width: '1rem',
                height: '1rem',
                display: 'grid',
                fontSize: '0.85rem',
                placeItems: 'center',
                background: '#facd66',
                borderRadius: '50%',
              }}
            />
            <span>add to collection</span>
          </div>
          <div className="">
            <AiFillHeart
              style={{
                width: '2rem',
                aspectRatio: '2rem',
                display: 'grid',
                placeItems: 'center',
                color: '#e5524a',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChartTop
