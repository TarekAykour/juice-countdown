import React from "react";
import Countdown from "./countdown";



function Home() {
    return (
        <div className="home">
            <div className="main">
                <h1>JUICE</h1>
                <div className="powered">
                    <h2>powered by</h2>
                    <div className="orgs">
                        <div className="esa">
                        <a href="https://www.esa.int/">
                            <img  alt="esa logo" src={require('../images/esa.png')} />
                        </a>
                        </div>
                        <div className="airbus">
                        <a href="https://www.airbus.com/en">
                            <img alt="airbus logo" src={require('../images/airbus.png')}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <Countdown/>
            
        </div>
    )
}


export default Home;