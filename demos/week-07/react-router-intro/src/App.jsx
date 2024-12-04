import {Route, Routes, Link} from "react-router-dom"
import NavBar from "./components/NavBar"
import Books from "./pages/Book"
import SamsRoutes from "./SamsRoutes"

export default function App() {
  return (
    <div>
      <h2>Hello class!</h2>
      <NavBar />
      {/* Where we are going to define all the routes in our application
      // what is a valid place for the user to go
      mywebsite.com/about-us
      mywebsite.com/home
      */}
      {/* <SamsRoutes/> */}
      <Routes>
            <Route path='/' element={<p>This is the home route!</p>} />
            <Route path='/about-us' element={<p>This is the about us page</p>} />
            <Route path='/books' element={<Books />} />

            {/* used to display not found - matches another other path then the one above. */}
            <Route path="*" element={<p>404</p>} />
      </Routes>


      <p>This is the footer</p>

    </div>
  )
}