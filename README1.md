# Juice project

## Intro

As of the 14th of April 2023 the ESA along with Airbus launch the Jupiter Icy Moons Explorer (JUICE) to explore Jupiter and it's icy moon "Europa". As a space enthousiast i wanted to make a countdown to keep track of this long journey that JUICE awaits. As of now JUICE has been in space for 44 days (28-5-2023) and is expected to reach Jupiter on July 2031. 



## Setup

I simply used React for this little application as a backend is unnecessary.


### Icon
I simply changed `<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />` inside the *index.html* to display the website icon. It's the JUICE logo :D

## Countdown
Have end date set to 14th of July 2031. For each 24 hours passes add +1 day.
parse the remainder of the total days so 365 / 365 =  1 year or 425 % 365 = 60 / 30 = 2 months.  

we count the amount of days from current date to end date (13 july 2031) we subtract 1 once we get closer by one day
the amount of days left will be divided into years, months and days. 