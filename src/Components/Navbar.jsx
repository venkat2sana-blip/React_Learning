import React from "react";

import { NavLink } from "react-router-dom";


function Navbar()
{
    return(<div>
        <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/Content"> <li>Content</li></NavLink>
       <NavLink to="/About"> <li>About</li></NavLink>
       <NavLink to="/Shop"> <li>Shop</li></NavLink>
    </div>)
};

export default Navbar;