import {Route, Routes, Link} from "react-router-dom"
import AnimalsPage from "./pages/AnimalsPage"
import IndividaulAnimalPage from "./pages/IndividaulAnimalPage"
export default function App() {
  return (
    <div>

      <h2>Welcome to my website!</h2>
      <Link to={'/'}>home</Link>
      <br />
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/animals'}>animals</Link>

      <Routes>
        <Route path={'/animals'} element={<AnimalsPage />} />
        {/* dynamic route */}
        {/* The : says to reactrouter that this is a dynamic route and it should 'match' to anything written after /animals/*/}
        <Route path={'/animals/:id'} element={<IndividaulAnimalPage />} />
        <Route path={'/'} element={<p>This is the home route</p>} />
      </Routes>
    </div>
  )
}