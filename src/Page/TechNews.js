import { useEffect, useState } from "react"
import Country from "../components/Country"
import ShimmerUI from "../components/ShimmerUI"

const TechNews =()=>{
    const [tech , settech] = useState([]) 
    const [country , setcountry] = useState('us')
    const [loading , setloading] = useState(true)
    useEffect(()=>{
        getTechNews()
    },[country])
    async function getTechNews(){
        setloading(true)
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=2e80e2d81d454f93b19cf3e0c71484c6`)
        const json = await data.json()
        settech(json?.articles)
        setloading(false)
    }
    return (
        <>
        <select className="form-select" onChange={(e)=>{
            setcountry(e.target.value)
        }}>
            <Country/>
        </select>
        <div className="container">
            <div className="container-fluid m-3">
                <h2 className="text-center fs-1 fw-bolder font-monospace">Tech News</h2>
            </div>
            {
                loading ? (<ShimmerUI/>) : (
                    tech.map((techie, index) => {
                        return (
                            <div key={index} className="row m-4 shadow-lg p-3 mb-5 bg-white rounded">
                                <img src={techie.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{techie.title}</h5>
                                    <p className="card-text">{techie.description}</p>
                                    <button className="btn btn-primary" onClick={() => {
                                        window.open(techie.url)
                                    }}>Read More</button>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    </>
    )
}

export default TechNews
