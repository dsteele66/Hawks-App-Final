Atlanta Sports App 

Sports
I am creating a sports app that allows you to track the roster of the best players on the ATL Hawks. 

MVP
The app will hold the team,
The app will hold the specific team name sports roster view tracker app
include assists
The app will allow you to delete a player depending on if they are traded/retire 
App will allow you to edit player stats or if they have a name change mid-seaon like 
Artest/World Peace or Ocho/Johnson
The app will successfully complete all CRUD applications. 



Stretch Goals
Use all Atlanta teams
The app will hold the star players for each of the teams.
I want to be able to add and delete a person depending on trades and cuts.
I want to be able to track team rosters over a certain amount of time. I am going to start with a two year span and go from there.


Front-end
I used handlebars for my project. I played around with EJS at first but then I actually did my project over with handlebars. 

List of Mongoose models and their properties
I will be doing a mongoose model that also has a schema that includes the team name, star players, their points per game, rebound, and assists.

List of Routes
I have about 5 different routes. 
I have a home route that can be a database for multiple different sports apps. 
I have the index route which holds the players along with their information as well.
I have a route to create a player and allows the user to input stats for the player 
I have a route to edit player stats as the season goes. 
I have a route to delete the player if they get traded or if they retire 

ISSUES:
-I Had trouble making the jersey numbers work 
-Trying to figure out what I wanted to do 
-Need more work with Bootstrap and Handlebars
-Not going to get enough help/Trying to do everything on my own
-Learning how to start simple then buidling/I get too excited
-Had a lot of issues commiting to Heroku
-Need to work on fundamentals in the beginning of project

Future Goals
-I want to evolve this into a free agency tracker 
-To finish my stretch goals for sports buffs or people who work in sports 
-I want to add API's and some more design 
-I want to add jersey numbers and positions 
-Also I could incorporate this to work for cap space and player contacts 
-Could keep track of how much money a team has to predict where a player might go
-Make this for coaches for their rosters bc they sometimes use outdated resources ex. white board
-Could make it for scouts 


User stories
-As a user I want to be able to keep track of who is on my team during the 
intense periods of free agency/ trade deadlines
-As a user I want to be able to see the complete inventory of the playesrs that matter
-As a user I want to be able to add/subtract players depending on what team they play for.  


Tech Used: 
-JS
-NODE
-MONGOOSE
-MONGODB
-HANDLEBARS
-BOOTSTRAP



dsteel10
ds-9809207
https is the protocol 
protocol;//address/domain/origin[port]
https://google.com
http://127.0.0.1:5500/project_awesome/
`mongodb://localhost:27017/express-mvc`


heroku config:set DB_URl="mongodb+srv://dsteel10:<ds-9809207>@cluster0.u4j0r.mongodb.net/deployproject2?retryWrites=true&w=majority"109e1bbd9dc9e27a6d1f587