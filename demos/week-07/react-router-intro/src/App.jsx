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
      <SamsRoutes/>

    </div>
  )
}