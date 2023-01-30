// local API to fetch data within the Work card

import pro1 from "../assets/project 1 pic.png";
import pro2 from "../assets/project 2 pic.png";
import pro3 from "../assets/project 3 pic.png";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Travel Itinerary Help",
        text: "The motivation behind creating this webpage was to help address the everyday concerns and problems of travel coordination, by implementing a website that helps users search for events & lodging options in relation to the location of their choosing.",
        view: "https://damien-shoemake.github.io/Project01-SuperHardworkingInnovativeTeam/", 
    },
    {
        imgsrc: pro2,
        title: "ToDo List",
        text: "To build a todo list website so that user could keep tracker of their todos. The app is available on Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express session npm package for authentication",
        view: "https://github.com/shelldan/appMonster", 
    },
    {
        imgsrc: pro3,
        title: "Game E-Commerce Application",
        text: "Our project is a full stack application that allows users to browse video games and add them to their cart. Then users will be able to checkout and purchase the games.",
        view: "https://github.com/okingdomz/404-Found", 
    },

];

export default ProjectCardData;