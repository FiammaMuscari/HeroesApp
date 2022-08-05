import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
const navigate = useNavigate()
const isActive = ({isActive}) =>`nav-item nav-link ${isActive ? 'active':''} `
const onLogout = () =>{
    navigate('/login', {replace: true}) //elimina el historial si hacen para atras al desloguearte
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={isActive} to="/marvel" 
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={isActive}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Fiamma
                    </span>
                    <button className='btn nav-item nav-link'
                    onClick={onLogout}
                    >Logout</button>
                </ul>
            </div>
        </nav>
    )
}