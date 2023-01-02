// local API to fetch data within the Work card

import pro1 from "../assets/project 1 pic.png";
import pro2 from "../assets/project 2 pic.png";
import pro3 from "../assets/project3.png";

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
        title: "TBE",
        text: "Insert Here",
        view: "https://www.youtube.com/watch?v=6JL22lU7KCw&list=PLHlOx8lzPX1IQjd6FAL5IXjgK-9h8kVM7&index=7&ab_channel=FLACKO", 
    },

];

export default ProjectCardData;