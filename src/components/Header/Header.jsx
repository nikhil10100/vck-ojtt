import {Link} from 'react-router-dom'
import './Header.css'; 
const Header = () => {
    return(
        <div>
            <header className='Hedear1'>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admission">Admission</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/course">Course</Link>
                    <Link to="/notfound">Not Found</Link>
                </nav>
            </header>

        </div>
    )
}

export default Header;