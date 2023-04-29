import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <form action="" className="searchBar_container">
      <div>
        <CiSearch className="search_icon" />
        <input type="text" placeholder="Search artists" />
      </div>
    </form>
  )
}

export default Search
