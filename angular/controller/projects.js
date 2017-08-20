/**
 * Created by omkar on 14/8/17.
 */


var showProjects = function ($scope) {

    $scope.projects = projects;


};

// all projects
var projects = [
    {
        title: 'NITK-Login',
        description: 'Android Application to auto-sign into NITK-NET Wifi',
        link: 'https://github.com/MO-DevTeam/NITK-Login',
        img : 'images/NITKLogin.png'

    },
    {
        title: 'SPlay',
        description: 'Dark Theme Android Music Player',
        link: 'https://www.github.com/omkarprabhu-98/SPlay',
        img: 'images/SPlay.png'
    },
    {
        title: 'Rapid 54',
        description: 'Android game to ',
        link: 'https://www.github.com/MO-DevTeam/Rapid54',
        img: 'images/Rapid54.png'
    },
    {
        title: 'KannadaApp',
        description: 'Android Application for learning basics of Kannada Language',
        link: 'https://www.github.com/omkarprabhu-98/KannadaApp',
        img: 'images/KannadaApp.png'
    }

];







angular.module('MyProfile').controller('ProjectsController',showProjects);