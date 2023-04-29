import TopChart from './TopChart'

import { BsFillHeartFill } from 'react-icons/bs'

import Img1 from '../assets/curated-artist-1.png'
import Img2 from '../assets/curated-artist-2.png'
import Img3 from '../assets/curated-artist-3.png'
import Img4 from '../assets/curated-artist-4.png'
import Img5 from '../assets/curated-artist-5.png'
import Img6 from '../assets/curated-vector.png'
import Img7 from '../assets/artist.png'

const CuratedPlaylist = () => {
  return (
    <section className="curatedPlaylist">
      <article className="curated">
        {/* left */}
        <div className="curated_left">
          <h6>curated playlist</h6>
          <div className="curated_title">
            <h3>R & B Hits</h3>
            <p>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              <br /> Bad habit, and so much more
            </p>
          </div>
          <div className="curated_likeBy">
            <div className="liked_by">
              <span>
                <img src={Img1} alt="artist one" />
              </span>
              <span>
                <img src={Img2} alt="artist two" />
              </span>
              <span>
                <img src={Img3} alt="artist three" />
              </span>
              <span>
                <img src={Img4} alt="artist four" />
              </span>
              <span>
                <img src={Img5} alt="artist five" />
              </span>
            </div>
            <BsFillHeartFill />
            <p>33k Likes</p>
          </div>
        </div>

        {/* right */}

        <div className="curated_right">
          <div className="curated_right_vector">
            <img src={Img6} alt="vector" />
          </div>
          <div className="curated_right_img">
            <img src={Img7} alt="artist image" />
          </div>
        </div>
      </article>
      <TopChart />
    </section>
  )
}

export default CuratedPlaylist
