/**
 * Created by omkar on 14/8/17.
 */


var showProjects = function ($scope) {

    $scope.projects = projects;


};

// all projects
var projects = [
    {
        title: 'Feedweb',
        description: 'A web portal where users can post information on various topics under a category. Users can also view, comment on, up vote for various posts. https://feedweb.herokuapp.com',
        link: 'https://github.com/MO-DevTeam/Feedweb',
        tags: ['Web App', 'MEAN stack']
    },
    {
        title: 'Modified Enigma Machine',
        description: 'CO-202 Mini Project. A modified implementation of the Enigma machine used in World War II using digital electronics with computer aided design',
        link: 'https://github.com/omkarprabhu-98/ModifiedEnigmaMachine',
        tags: ['Verilog-HDL', 'Logisim', 'Digital-Design']
    },
    {
        title: 'Secure Aadhaar',
        description: 'A Secure Digital Identification platform on blockchain built using Hyperledger Composer that allows users to control the access of their identification information',
        link: 'https://github.com/TeamAlpha-NITK',
        tags: ['Hyperledger Composer', 'NodeJS', 'Angular5']
    },
    {
        title: 'Guess What',
        description: 'Q&A Android app for which a user has to answer a question based on a scrambled image. It uses Firebase as a backend Edit\n',
        link: 'https://github.com/omkarprabhu-98/GuessWhat',
        tags: ['Android', 'Firebase', 'Material-Design']
    },
    {
        title: 'Course Assistant for Educators',
        description: 'Android application providing assistance for educators with features like recording attendance, marks, setting reminders for projects, etc with backup functionality.\n',
        link: 'https://github.com/omkarprabhu-98/GuessWhat',
        tags: ['Android', 'Firebase', 'Firestore', 'SQLite']
    },
    {
        title: 'MapReduce Jobs for Hadoop',
        description: 'Collection of examples for jobs in python for Hadoop using MapReduce programming model',
        link: 'https://github.com/omkarprabhu-98/mapreduce-jobs-for-hadoop',
        tags: ['Hadoop', 'MapReduce', 'luigi']
    },
    {
        title: 'SPlay',
        description: 'Dark Theme Android Music Player',
        link: 'https://www.github.com/omkarprabhu-98/SPlay',
        tags: ['Android']
    },
    {
        title: 'TxtRec',
        description: 'A simple web app with MEAN stack for OCR using Tesseract API',
        link: 'https://github.com/omkarprabhu-98/TxtRec',
        tags: ['Web App', 'Tesseract-API', 'MEAN stack']
    },
    {
        title: 'Basic Chat',
        description: 'Android Chat application in which signed-in users can post text and image messages. It uses Firebase for backend Edit\n',
        link: 'https://github.com/omkarprabhu-98/BasicChat',
        tags: ['Android', 'Firebase']
    },
    {
        title: 'Rapid 54',
        description: 'Android game to click on tiles from 1-54 in ascending order given a time limit',
        link: 'https://www.github.com/MO-DevTeam/Rapid54',
        tags: ['Android']
    },
    {
        title: 'NITK-Login',
        description: 'Android Application to auto-sign into NITK-NET Wifi',
        link: 'https://github.com/MO-DevTeam/NITK-Login',
        tags: ['Android']
    }


];


angular.module('MyProfile').controller('ProjectsController',showProjects);