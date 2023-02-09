
/*
Header Component
    - logo - left
    - Navigation Bar  - right
        - Home 
        - Tech News
        - Daily News
        - search news
Title
    - Title

Card
    - news box
        - image
        - title
        - description
        - source 
            - name with logo
*/

import { createBrowserRouter, Outlet } from "react-router-dom"
import Body from "./components/Body"
import NavBar from "./components/Navbar"
import TechNews from "./Page/TechNews"
const App = ()=>{
    return(
    <>
<NavBar/>
<Outlet/>
</> 
    )
}
const approuter = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },{
        path:"/technews",
        element:<TechNews/>
    }]
}
])
export default approuter