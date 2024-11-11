import {Routes, Route} from "react-router-dom"
import Books from "./pages/Book"

export default function SamsRoutes() {
    return (
        <Routes>
            <Route path='/' element={<p>This is the home route!</p>} />
            <Route path='/about-us' element={<p>This is the about us page</p>} />
            <Route path='/books' element={<Books />} />

            {/* used to display not found - matches another other path then the one above. */}
            <Route path="*" element={<p>404</p>} />
      </Routes>
    )
}