// import { useState } from 'react'
import { collections } from '../data'
// import { btns } from '../data'

const MyCollection = () => {
  // const [active, setActive] = useState(false)

  // const handleNavLinkClick = () => {
  //   setActive(!active)
  // }

  return (
    <div className="collection">
      <div className="collectionBtn">
        <button className="active">my collection</button>
        <button className="">likes</button>
      </div>
      <div className="collectionDetails">
        {collections.map((collection) => {
          const { id, artist, img, title } = collection
          return (
            <div key={id} className="collectionData">
              <div className="collectionImg">
                <img src={img} alt={title} />
              </div>
              <div className="collectionText">
                <h5>{title}</h5>
                <small>{artist}</small>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default MyCollection
