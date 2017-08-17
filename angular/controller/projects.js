/**
 * Created by omkar on 14/8/17.
 */


var showProjects = function ($scope) {

    $scope.projects = projects;


};


var projects = [
    {
        'title': 'NITK-Login',
        'description': 'Android Application to auto-sign into NITK-NET Wifi',
        'link': 'https://github.com/MO-DevTeam/NITK-Login',
        'img': 'images/NITK-Login.png'
    },
    {
        title: 'SPlay',
        description: 'Dark Theme Android Music Player',
        link: 'https://www.github.com/omkarprabhu-98/SPlay',
        'img': 'images/SPlay.png'

    }
];







angular.module('MyProfile').controller('ProjectsController',showProjects);