import { Box, Button, useColorMode } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import {ColorMode} from '../../heroes/components/ColorMode';

export const Navbar = () => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext )

    const isActive = ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`
    
    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        })
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
                        className={isActive} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={isActive} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={isActive} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-primary">
                        { user?.username }
                   </span>
                   <Box pt="0" pl="1" px='1'>
              <ColorMode />
            </Box>
                   <Button className='text-secondary btn nav-item nav-link'

                        onClick={onLogout}
                   > 
                        Logout
                   </Button>
                </ul>
            </div>
        </nav>
    )
}