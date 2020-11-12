import eventSafeImg from "./images/eventsafe.png";
import dateNightImg from "./images/date-night.png";
import employeeDirImg from "./images/employee-directory.png";
import budgetImg from "./images/budget-tracker.png";
import fitnessImg from "./images/workout-tracker.png";
import employeeTempImg from "./images/employee-template.png";
import burgerImg from "./images/burger.png";
import weatherImg from "./images/weather-dashboard.png";

const Projects = [
  {
    "id": 0,
    "name": "EventSafe",
    "description": "A social platform to post local events that are taking COVID-19 safety precautions.",
    "deployURL": "https://project-2-team-3.herokuapp.com/",
    "repoURL": "https://github.com/kassimariemc/EventSafe",
    "img": eventSafeImg,
    "tech": [
      "Sequelize",
      "Express",
      "Handlebars",
      "Google Maps API"
    ]
  },
  {
    "id": 1,
    "name": "Date Night at Home",
    "description": "A simple app making it quick and easy to decide on dinner and a movie to enjoy in the safety of your home",
    "deployURL": "https://kassimariemc.github.io/project-1-operation-date-night/",
    "repoURL": "https://github.com/kassimariemc/project-1-operation-date-night",
    "img": dateNightImg,
    "tech": [
      "jQuery",
      "The Movie Database API",
      "Google Places API"
    ]
  },
  {
    "id": 2,
    "name": "Employee Directory",
    "description": "View your entire employee directory with quick access to their information.",
    "deployURL": "https://kassimariemc.github.io/user-directory/",
    "repoURL": "https://github.com/kassimariemc/user-directory",
    "img": employeeDirImg,
    "tech": [
      "React App",
      "JSX",
      "React Props &amp; States",
      "Class Components"
    ]
  },
  {
    "id": 3,
    "name": "Budget Tracker",
    "description": "Balance your accounts and track your expenses even when offline",
    "deployURL": "https://budget-tracker-kassimariemc.herokuapp.com/",
    "repoURL": "https://github.com/kassimariemc/budget-tracker",
    "img": budgetImg,
    "tech": [
      "Service Worker",
      "IndexDB",
      "Web Manifest",
      "Chart.js",
      "MongoDb with Mongoose Schema"
    ]
  },
  {
    "id": 4,
    "name": "Workout Tracker",
    "description": "Track your daily workouts with this simple fitness app.",
    "deployURL": "https://workout-tracker-kassimariemc.herokuapp.com/",
    "repoURL": "https://github.com/kassimariemc/workout-tracker",
    "img": fitnessImg,
    "tech": [
      "Node.js",
      "Express",
      "Object Document Mapping",
      "MongoDb with Mongoose Schema"
    ]
  },
  {
    "id": 5,
    "name": "Employee Template Engine",
    "description": "A Node CLI to generate a simple HTML page containing employee information for a software engineering team",
    "deployURL": "",
    "repoURL": "https://github.com/kassimariemc/employee-template-engine",
    "img": employeeTempImg,
    "tech": [
      "Node.js",
      "JavaScript",
      "Inquirer NPM Package",
      "Testing with Jest"
    ]
  },
  {
    "id": 6,
    "name": "Burger Logger",
    "description": "Keep track of the burgers you'd like to eat and ones that you've already devoured!",
    "deployURL": "https://kassimariemc-burger.herokuapp.com/",
    "repoURL": "https://github.com/kassimariemc/burger",
    "img": burgerImg,
    "tech": [
      "Node.js",
      "Express",
      "Express Handlebars",
      "ORM",
      "MVC Patter Design",
      "MySQL"
    ]
  },
  {
    "id": 7,
    "name": "Weather Dashboard",
    "description": "A simple weather app to search current and 5-day forecast for any given city",
    "deployURL": "https://kassimariemc.github.io/weather-dashboard/",
    "repoURL": "https://github.com/kassimariemc/weather-dashboard",
    "img": weatherImg,
    "tech": [
      "jQuery",
      "OpenWeather API",
      "Local Storage Componenets"
    ]
  }
  
]

export default Projects;