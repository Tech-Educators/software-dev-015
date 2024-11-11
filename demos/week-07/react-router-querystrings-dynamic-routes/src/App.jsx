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
        <Route path={'/animals/:id'} element={<IndividaulAnimalPage />}>

        {/* nested routing */}
        {/* /animals/3/edit */}
        {/* if you want to use nested routes, the parent components needs to include an <Outlet> component, telling the page where to display the nested routes */}
        {/* for us, the outlet would go in the indiviaul animalpage components */}
          <Route path='/animals/:id/edit' element={<p>Edit the animal details</p>} />
          <Route path='/animals/:id/photos' element={<p>more photos of the animal</p>} />

        </Route>



        <Route path={'/'} element={<p>This is the home route</p>} />
      </Routes>
    </div>
  )
}