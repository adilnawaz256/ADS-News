const ShimmerUI = ()=>{
    return(
  <div className="shimmer">
    <div className="container"> 
    {
        Array(10).fill('').map((e)=>
        <div className="row m-4 shadow-lg p-3 mb-5 bg-white rounded">
              <img src="" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title"></h5>
    <p className="card-text"></p>
    <button className="btn"></button>
  </div>
    </div>
)
    }
  </div>
  </div>
    )
}

export default ShimmerUI