const Box = ({title,description,urlToImage ,url}) => {
  return (
    <div className="row m-4 shadow-lg p-3 mb-5 bg-white rounded">
       <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <button className="btn btn-primary" onClick={()=>{
      window.open(url)
    }}>Read More</button>
  </div>
    </div>
  )
}

export default Box