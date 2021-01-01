import Image1 from './images/SmartBrain.jpg'
import Image2 from './images/Portfolio.png'
import Image3 from './images/robofriends.png'


export const projectList = [
{
    title: 'SMARTBRAIN',
    header: 'This app is built with REACT, NODEJS and utilises Postgres as a database.',
    info: "Smart Brain takes an image URL and uses the clarifai face detection API to place a bounding box around a face within the picture. Currently only works on one face within a group. \n To login use: username: bob@test.com \n password: test or register yourself.",
    image: Image1,
    live: "https://desolate-ocean-20239.herokuapp.com/" ,
    frontend: "https://github.com/lamb572/smartbrain" ,
    backend: "https://github.com/lamb572/smartbrain-API"
},
{
    title: 'Portfolio',
    header: 'This app is built with REACT',
    info: "This is the links to the source code for current web page. This is portfolio currently has no back end code",
    image: Image2,
    live: "https://lukebeach.uk" ,
    frontend: "https://github.com/lamb572/portfolio" ,
    backend: ""

},
{
    title: 'RoboFriends',
    header: 'This app is built with REACT.',
    info: "This app was built as part of 'The Complete Web Developer in 2021: Zero to Mastery' from Andrei Neagoie",
    image: Image3,
    live: "https://lamb572.github.io/robofriends/" ,
    frontend: "https://github.com/lamb572/robofriends" ,
    backend: ""
}
];

export default projectList;