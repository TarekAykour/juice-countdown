import React from "react";



function Nav(){
    return(
        <nav className="navigation">
            {/* <div style={{padding: '5px'}} className="logo">Logo</div> */}
            <a href="/"><img style={{padding: '5px'}} src={require('../images/juice.png')} width='75px'/></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/ideas">ideas</a></li>
                <li><a href="/more">More</a></li>
            </ul>
        </nav>
    )
}


export default Nav;