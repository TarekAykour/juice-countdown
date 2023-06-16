import React, {useEffect, useState} from "react";



function Countdown(){
    const arrivalDate = new Date('7/13/2031');
    const currentDate = new Date();
    const diffTime = arrivalDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60  * 24));
    const years = diffDays / 365
    const months = (years % 1) * 12
    const days =   (months % 1) * 30
    const hours = (days % 1) * 24

    
    
    
    return(
        <div>
           <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '50%',
                margin: 'auto',
                marginBottom: '50px'
           }}>
                <div style={{
                 position: 'relative',
                 zIndex: 2,
                 marginBottom: '25px'
                }}>
                     <h2 style={{fontFamily: 'speedy', textAlign: 'center'}}>Current Date</h2>
                     <h3 style={{fontFamily: 'speedy', textAlign: 'center'}}>{currentDate.toLocaleDateString()}</h3>
                </div>
                <div style={{
                 position: 'relative',
                 zIndex: 2,
                 marginBottom: '25px'
                }}>
                    <h2 style={{fontFamily: 'speedy', textAlign: 'center'}}>Arival Date</h2>
                    <h3 style={{fontFamily: 'speedy', textAlign: 'center'}}>{arrivalDate.toLocaleDateString()}</h3>     
                </div>
           </div>
            <div className="countdown">
                <div className="countdown-left">
                    <h2 style={{textAlign: 'center'}}>Amount of time left</h2>
                    <div className="left">
                        <div className=" years">
                            <h2>{Math.round(years)}</h2><br/>
                            <h3>{Math.round(years) > 1 ? 'years' : 'year'}</h3> 
                        </div>

                        {months > 0 ?  <div className="months">
                            <h2>{ Math.round(months) }</h2> <br/>
                            <h3>{ Math.round(months) > 1 ? 'months' : 'month'} </h3>
                        </div> : <div/>}
                        {days > 0 ? <div className="days">
                            <h2>{ Math.floor(days) }</h2> <br/>
                            <h3>{Math.round(days) > 1 ? 'days' : 'day'}</h3>
                        </div> : <div></div>}
                        {
                        hours > 0 ? 
                        <div className="hours">
                            <h2>{ Math.round(hours) } </h2><br/>
                            <h3>hours</h3>
                        </div>
                        : <div></div>
                        }
                    </div>
                </div>
                {/* <div className="countdown-expired">
                    <h2 style={{textAlign: 'center'}}>Amount of time passed</h2>
                    <div className="expired">

                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default Countdown;