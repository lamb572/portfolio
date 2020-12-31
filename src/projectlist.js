import Image1 from './images/SmartBrain.jpg'
import Image2 from './images/Portfolio.png'


export const projectList = [
{
    title: 'SMARTBRAIN',
    header: 'This app is built with REACT, NODEJS and utilises Postgres as a database.',
    info: "Smart Brain takes an image URL and uses the clarifai face detection API to place a bounding box around a face within the picture. Currently only works on one face within a group. \n To login use: \n username: bob@test.com \n password: test \n or register yourself.",
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
    live: "https://salmon-hill-049862003.azurestaticapps.net/" ,
    frontend: "https://github.com/lamb572/portfolio" ,
    backend: "https://salmon-hill-049862003.azurestaticapps.net/"

}
];

export default projectList;