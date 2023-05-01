import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import { newRelease } from '../data'

const NewRelease = () => {
  return (
    <div className="newRelease">
      <div className="newRelease_title">
        <h3>New Release</h3>
      </div>
      <div className="newRelease_iconLeft">
        <BsFillCaretLeftFill />
      </div>

      <div className="newRelease_items">
        {newRelease.map((item) => {
          const { id, img, title, artist } = item
          return (
            <article key={id} className="newRelease_article">
              <img src={img} alt={artist} />
              <h6>{title}</h6>
              <span>{artist}</span>
            </article>
          )
        })}
      </div>
      <div className="newRelease_iconRight">
        <BsFillCaretRightFill />
      </div>
    </div>
  )
}
export default NewRelease
