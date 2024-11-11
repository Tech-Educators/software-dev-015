import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <Link to={'/books'}>Books</Link>
            <Link to={'/'}> Home </Link>


            <a href='/party'>party</a>
        </div>
    )
}

// a tag will cause the page to 'reload'
// Link component does not 
// recommend using Link