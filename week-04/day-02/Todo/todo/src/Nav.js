import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/app1'>Pink</NavLink> |&nbsp;
            <NavLink to='/app2'>Black</NavLink> 
        </div>
    </div>
    )

    export default NavBar;