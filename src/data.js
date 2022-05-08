import pokeimg from "../src/Assets/pokedex.png"
import angimg from "../src/Assets/myFlixAngular.png"
import meetimg from "../src/Assets/MeetApp2.png"
import reactimg from "../src/Assets/reactMyFlix.png"
import chatimg from "../src/Assets/chatApp3.png"
import apiimg from "../src/Assets/Postman2.png"
import rossimg from "../src/Assets/ross.png"

export const projects = [
    {
        title: "myFlix Angular",
        subtitle: "Angular / Material Design / Mongo",
        description: "Connected to an API built with Express and MongoDB,this project uses Angular and Material Design. Users authenticate into the app, view movie data, and add or remove movies from their profile.",
        image: angimg,
        link: "https://rhbusch.github.io/myFlix-Angular-Client/welcome",
    },
    {
        title: "Pokedex",
        subtitle: "Vanilla JS / JQuery / Bootstrap ",
        description: "A web app built with Javascript, HTML, CSS, jQuery and Bootstrap. Users can search through a pokemon collection that is loading from an external API. Details can be displayed in a modal by clicking on a pokemon's name.",
        image: pokeimg,
        link: "https://rhbusch.github.io/PokeApp/",
    },
    {
        title: "MeetApp",
        subtitle: "React / AWS / PWA / Recharts",
        description: "Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique combined with behavior-driven development as well. Cucumber and Jest were leveraged as testing tools. Recharts was utilized as a data visualization library for the pie chart and scatter chart. The application uses the Google Calendar API to fetch upcoming events.",
        image: meetimg,
        link: "https://rhbusch.github.io/meetapp/",
    },
    {
        title: "myFlix React",
        subtitle: "React / Redux / Mongo / Bootstrap",
        description: "The React front-end version of myFlix. Users of this app are able to get info on movies, genres and directors. After creating an account, users can edit their user info as well as create and edit a list of their favorite movies.",
        image: reactimg,
        link: "https://github.com/RHBusch/myFlixClientDev",
    },
    {
        title: "ChatApp",
        subtitle: "React Native / Gifted Chat / Firebase",
        description: "A mobile chat app built with React Native and Gifted Chat that allows users to chat with each other. Users can pick a background color, read and send messages, share images and their location. The app uses React Native Async Storage to allow users to view stored messages when offline. Firestore is also used to store data.",
        image: chatimg,
        link: "https://github.com/RHBusch/ChatAppReactNative",
    },
    {
        title: "myFlix API ",
        subtitle: "Angular/Material Design/Mongo",
        description: "This API is the server-side component of myFlix web application. It is built using Node.js and Express using REST architecture. The movie and user databases are built with MongoDB and the business logic is modeled with Mongoose. The API was tested with Postman.",
        image: apiimg,
        link: "https://github.com/RHBusch/movie_api",
    },
];


export const skillsdata = [

    {
        skill: "React",
    },

    {
        skill: "Angular / Material Design",
    },
    {
        skill: "Mongo",
    },
    {
        skill: "NodeJS",
    },
    {
        skill: "HTML",
    },
    {
        skill: "CSS / Tailwind CSS",
    },
    {
        skill: "Bootstrap",
    },
    {
        skill: "Jest + Cucumber",
    },
];

export const testimonialdata = [

    {
        quote: "Insert future praise here.What a great developer! So much skill. Awesome member of the team.",
        image: rossimg,
        name: "Yoda",
        company: "Jedi Industries",
    },

    {
        quote: "Insert future praise here. What a great developer! So much skill. Awesome member of the team.",
        image: rossimg,
        name: "Yoda",
        company: "Jedi Industries",
    },
    {
        quote: "Insert future praise here. What a great developer! So much skill. Awesome member of the team.",
        image: rossimg,
        name: "Yoda",
        company: "Jedi Industries",
    },
    {
        quote: "Insert future praise here. What a great developer! So much skill. Awesome member of the team.",
        image: rossimg,
        name: "Yoda",
        company: "Jedi Industries",
    },
];