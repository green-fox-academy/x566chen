import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/'>Not Implement</NavLink> |&nbsp;
            <NavLink to='/ route'>Hello World</NavLink> |&nbsp;
            <NavLink to='/error route'>Error</NavLink> |&nbsp;
            <NavLink to='/error/:errorcode route'>Error Code</NavLink>
        </div>
    </div>
    )
    export default NavBar;