import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "./Alllink";
import ShimmerUI from './ShimmerUI';
import Country from "./Country";
const mystyle ={
    overflowX: "hidden",
};

const apikey = '2e80e2d81d454f93b19cf3e0c71484c6';
const Body = () => {
    const [news, setnews] = useState([]);
    const [country, setcountry] = useState('in');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;

    useEffect(() => {
        getNewsData();
    }, [country]);

    function getNewsData() {
        setLoading(true);
        axios.get(baseUrl)
            .then(res => {
                setnews(res.data.articles);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }

    return (
        <>
            <select className="form-select" aria-label="Default select example" onChange={(e) => {
                setcountry(e.target.value);
            }}>
               <Country/>
            </select>
            <div style={mystyle}>
                <div className="container-fluid m-3">
                    <h2 className="text-center fs-1 fw-bolder font-monospace">Latest News</h2>
                </div>
                {error && <div className="alert alert-danger">Error: {error.message}</div>}
                {loading ? (
                    <ShimmerUI />
                ) : (
                    <div className="container">
                        {news.map((latesnews) => {
                            return <Box {...latesnews} />;
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Body;
