import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import approuter from './App'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={approuter}/>)