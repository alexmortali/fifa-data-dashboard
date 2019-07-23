Code Institute - Interactive Frontend Development Project  
Fifa Data Dashboard  
by Alex Mortali  

This is an interactive website displaying statistics on Fifa football players.  
The website serves to provide enterainment, facts and comparisons for Fifa and football fans.  
It includes 3 filters where users can filter the data by Team, Country and Player name. Two bar charts comparing 
position to overall score and position to weekly salary. Three pie charts showing players preferred foot, work rate and body type.  
Finally the last section reveals the number one player on fifa.


# Demo  
A live demo can be found [here](https://alexmortali.github.io/fifa-data-dashboard/)

# UX  

#### Wireframes  
Both Wireframes can be found [here.](https://github.com/alexmortali/fifa-data-dashboard/tree/master/Wireframes) 

The website is desktop first and is a single page dashboard. It's layout consists of a fixed sidebar on the left hand side which provides filters and a reset button to the users. It then has the main content on the right
featuring various graphs showing the data.

#### Focus
The focus of the layout of the dashboard is to keep it simple so users can easily interact with the data. This is done by using a neutral colour scheme, a simple layout where each area  is clearly distinguished from the next
using a different background colour. The layout also makes sure that the pie charts and one of the bar charts are all in view at the same time, this makes the interface easier to interact with as user don't have to 
excessively scroll to see the charts change. 

#### Users 
The users of the website will be people who play Fifa or are football fans and want to look at and compare the data of football players.

#### What Can They Do
Users can view and interact with data through the various graphs. The data includes players positions, teams, nationalities, work rate, body type, preffered foot and salary. All this data allows users to filter the data 
in many different ways.

#### User Stories  
  - I would like to filter the data so I can see all the players from a single country.  
  - I would like to filter the data so I can see the statistics of one specific player.  
  - I would like to filter the data so I can see the salary of the players from a specific team. 

#### Colour Pallet  
The main consideration for the colour pallet was to keep it neutral. For the graphs the colours used are all shades of blue. This allows the different sections of the pie charts to be distinguished from each 
other but not any section being overpowering. It also matches the blue in the ea sports logo.  

For the only button on the dashboard red is used as this looks good against the blue but also stands out against it. Red is an alarming colour which is important as the button is a 'reset all' button, 
the red is also the same red from the ea sports logo.  

#### Typography
For the font 'Roboto' is used throughout the site. It is a clear and simple font that is easy to read and does not interupt the users interaction with the dashboard. A soft black is also used 
for the font accross the site, keeping it consistent and easy to read.

# Features  
### Current Features  
  #### SideBar
  - Team Selector: This allows users to filter the data to show players from a specific team.  
  - Country Selector: This allows users to filter the data to show players from a specific Country.  
  - Player Selector: This allows users to filter the data to show a specific player.  
  - Reset All button: This allows users to reset all filters and selections made and take the data back to the default state.    

  #### CHARTS  
  - Position to Score Bar Chart: This allows users to view the average overscore from each position.  
  - Position to Salary Bar Chart: This allows users to view the average salary from each position.  
  - Preferred Foot Pie Chart: This allows users to see the number of players which prefer left or right foot.   
    It will also show what foot a player is if the user has filtered down to a single player.  
  - Body Type Pie Chart: This allows users to see the body types of players based on the filters they have chosen.   
    It will also show the body type of a player if the user has filtered down to a single player.  
  - Work Rate Pie Chart: This allows users to see the work rates of players based on the filters they have chosen. 
    It will also show the work rate of a player if the user has filtered down to a single player.  

All of the charts are interactive so users can really specify there seaach and visually see certain sections of the data, such as a specific countrys statistics.

Who's Number One: This final section tells users who the best rated player on the game is.

### Features Left To Implement  
In the future I would like to add a pop up modal if a user has narrowed there search to single player. It would show more of that players stats.

# Technologies Used   
 - [HTML](https://html.com/): This project uses HTML as the skeleton of the website.  
 - [CSS](https://devdocs.io/css/): This project uses CSS to control the presentation of the website.  
 - [Bootstrap(3.3.7)](https://getbootstrap.com/docs/3.3/): This project uses Bootstrap as it's framework to make the site responsive.  
 - [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript): This project uses JavaScript to make the site interactive.  
 - [DC js](https://dc-js.github.io/dc.js/): This project uses dcjs to create the charts.  
 - [D3 js](https://d3js.org/): This project uses d3js to render each of the dynamic, interactive charts.  
 - [Crossfilter js](https://square.github.io/crossfilter/): This project uses crossfilter js to allow dynamic interaction between all the charts.  
 - [Queue js](http://code.iamkate.com/javascript/queues/): This project uses queue js to allow the data to load first.  


# Testing  

### Tests Conducted 
- HTML Code was put through [W3 HTML Validator](https://validator.w3.org/) which reported missing alt tags from both images and have both been added.  
- CSS Code was put through [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) which reported no problems.  
- JS Code was put through [Esprima: Syntax Validator](https://esprima.org/demo/validate.html) with no reported problems.  
- The site was tested on Chrome and Safari on multiple devices including iPhone 7, iPad, laptop and desktop.  
- When testing the filters on the sidebar it was clear the data was full of foreign characters for player names, these were showing up as question marks. This has been resolved now, however due to the size of the data there may be some left. This does not affect the functionality of the site.  

### Manual Tests
#### SideBar  
 - EA Sports Logo Refreshes the page.  
 - Team Selector filters data correctly.
 - Country Selector filters data correctly.
 - Player Selector filters data correctly.
 - Using mulitple filters at once filters data correctly.
 - Reset button removes all filters and resets graphs to default.

#### Graphs
 - All Graphs and Charts react to interaction and applied filters from sidebar.
 - All Graphs and Charts use overflow: auto for smaller screen sizes and this works correctly.
 - There was some issues with the data displaying blank cells. For example for the player position, there would be one bar with no label because there was a group of players 
with a blank cell for this position. To fix this I simply deleted these rows from the data.

### Mobile Testing  
Although this website is created for laptops and desktops great care was taken to make it functional on smaller screen sizes. 
When testing the website on smaller screen sizes it became obvious the graphs do not work well with smaller devices. To counter this and encourage users to use a bigger device I have hidden certain features.
On mobile and tablet devices the sidebar is hidden therefore users cannot filter the data by team, country or player. There is however an added pop up modal explaining this and ecouraging users to use a bigger device.

On mobile it was clear the original layout didn't work, there was a lot of overflow,  it looked messy and was difficult to use. 
This was resolved by hiding the side bar and putting each of the pie charts on the own line and extending the container height. This new layout gives the site a better flow and 
makes the website easy to use on mobile and tablet devices.

# Deployement  
This project was developed using [AWS Cloud9.](https://aws.amazon.com/cloud9/) [Git](https://git-scm.com/) was used for version control and backup. The project was then pushed to a remote 
repository on [GitHub.](https://github.com/alexmortali/fifa-data-dashboard) From there the GitHub repository was then pushed to GitHub Pages which can be found [here.](https://alexmortali.github.io/fifa-data-dashboard/)

The site is deployed directly from the master branch and is hosted using GitHub pages. The landing page is correctly named index.html in order for the site to work correctly.

# Credits   
#### CONTENT
The data was taken from [here.](https://www.kaggle.com/karangadiya/fifa19) It has been edited slightly to remove blanks, typos and some of the rows. All content throughout the site was written by me.

#### MEDIA
The image of Messi was taken from [here](https://mundoalbiceleste.com/2018/09/24/lionel-messi-fifa-best-argentina-coach/)

#### ACKNOWLEDGEMENTS
Border line was taken from [here](http://jsfiddle.net/ZTz7Q/)
