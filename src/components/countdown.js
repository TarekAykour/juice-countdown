import React, {useEffect, useState} from "react";



function Countdown(){
    // const arrivalDate = new Date('7/13/2031');
    // const currentDate = new Date();
    // const diffTime = arrivalDate - currentDate;
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60  * 24));
    // const years = diffDays / 365
    // const months = (years % 1) * 12
    // const days =   (months % 1) * 30.33
    // const hours = (days % 1) * 24

const arrivalDate = new Date('7/13/2031');
const currentDate = new Date();
const timeDifference = arrivalDate - currentDate;

// Calculate days remaining
const millisecondsInADay = 1000 * 60 * 60 * 24;
const daysRemaining = Math.ceil(timeDifference / millisecondsInADay);

// Calculate years, months, and days
const yearsRemaining = Math.floor(daysRemaining / 365);
const daysWithoutYears = daysRemaining - (yearsRemaining * 365);
const monthsRemaining = Math.floor(daysWithoutYears / 30); // Approximate
const daysWithoutMonths = daysWithoutYears - (monthsRemaining * 30);

// Calculate hours
const hoursRemaining = Math.floor((timeDifference % millisecondsInADay) / (1000 * 60 * 60));

    
    
    
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
                            <h2>{Math.round(yearsRemaining)}</h2><br/>
                            <h3>{Math.round(yearsRemaining) > 1 ? 'years' : 'year'}</h3> 
                        </div>

                        {monthsRemaining > 0 ?  <div className="months">
                            <h2>{ Math.round(monthsRemaining) }</h2> <br/>
                            <h3>{ Math.round(monthsRemaining) > 1 ? 'months' : 'month'} </h3>
                        </div> : <div/>}
                        {daysRemaining > 0 ? <div className="days">
                            <h2>{ Math.floor(daysWithoutMonths) }</h2> <br/>
                            <h3>{Math.round(daysWithoutMonths) > 1 ? 'days' : 'day'}</h3>
                        </div> : <div></div>}
                        {
                        hoursRemaining > 0 ? 
                        <div className="hours">
                            <h2>{ Math.round(hoursRemaining) } </h2><br/>
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