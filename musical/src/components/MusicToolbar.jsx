import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { BsFillPlayFill, BsRepeat1, BsFillVolumeUpFill } from 'react-icons/bs'
import { RiShuffleFill } from 'react-icons/ri'

import img from '../assets/collection2.png'

const MusicToolbar = () => {
  return (
    <div className="musicToolbar">
      <div className="container musicContainer">
        <div className="musicLeft">
          <img src={img} alt="artist image" />
          <div className="musicDetails">
            <h5>season in</h5>
            <span>james</span>
          </div>
        </div>

        <div className="musicTools">
          <div className="tools">
            <RiShuffleFill style={{ fontSize: '1rem' }} />
            <BiSkipPrevious />
            <div className="play">
              <BsFillPlayFill />
            </div>
            <BiSkipNext />
            <BsRepeat1 />
          </div>
          <div className="playSlider_container">
            <div className="backLayer"></div>
            <div className="frontLayer"></div>
            <div className="layerCircle"></div>
          </div>
        </div>

        <div className="volumeTools">
          <BsFillVolumeUpFill />
          <div className="volume"></div>
        </div>
      </div>
    </div>
  )
}
export default MusicToolbar
