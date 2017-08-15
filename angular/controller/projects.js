/**
 * Created by omkar on 14/8/17.
 */


var showProjects = function ($scope) {

    $scope.projects = projects;


};


var projects = [
    {
        'title': 'First Project',
        'description': 'This was my first project, I loved working on it',
        'link': 'https://www.github.com/omkarprabhu-98'
    },
    {
        title: 'First Project',
        description: 'This was my first project, I loved working on it',
        link: 'https://www.github.com/omkarprabhu-98'
    },
    {
        title: 'First Project',
        description: 'This was my first project, I loved working on it',
        link: 'https://www.github.com/omkarprabhu-98'
    },
    {
        title: 'First Project',
        description: 'This was my first project, I loved working on it',
        link: 'https://www.github.com/omkarprabhu-98'
    },
    {
        title: 'First Project',
        description: 'This was my first project, I loved working on it',
        link: 'https://www.github.com/omkarprabhu-98'
    },
    {
        title: 'First Project',
        description: 'This was my first project, I loved working on it',
        link: 'https://www.github.com/omkarprabhu-98'
    },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        },
        {
            title: 'First Project',
            description: 'This was my first project, I loved working on it',
            link: 'https://www.github.com/omkarprabhu-98'
        }
];







angular.module('MyProfile').controller('ProjectsController',showProjects);