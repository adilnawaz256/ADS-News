import { useState } from "react"

const SearchBar = ()=>{
  const [search , setsearch] = useState('')
  function filterNews(search , news){
    console.log(search);
  }
    return(
      <>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} 
        onChange={(e)=>setsearch(e.target.value)}
        />
        <button className="btn btn-success" 
        onClick={()=>{
          filterNews(search , news)
         
        }}
        >Search</button>
      </form>
      </>
    )
}
export default SearchBar