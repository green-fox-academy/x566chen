import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/'>Not Implement</NavLink> |&nbsp;
            <NavLink to='/route'>Hello World</NavLink> |&nbsp;
            <NavLink to='/error'>Error</NavLink> |&nbsp;
            <NavLink to='/error/:id'>Error Code</NavLink>
        </div>
    </div>
    )
    export default NavBar;