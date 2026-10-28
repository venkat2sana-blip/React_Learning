import React from "react";
import { Outlet,Link } from "react-router-dom";


function Shop()
{
    return(
    <div>
        <h2>SHOP</h2>
        <div>
            <Link to="men"><button>Men</button></Link>
            <Link to="women"><button>Women</button></Link>
            <Link to="kids"><button>Kids</button></Link>
        </div>
        <Outlet/>
    </div>
);
};

export default Shop