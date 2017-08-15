/**
 * Created by Admin on 18-Jul-17.
 */


angular.module('MyProfile', ["ui.router"]).config(function ($stateProvider) {



    $stateProvider

        .state('about', {

            templateUrl: 'partials/AboutMe.html'
        })
        .state('projects', {

            templateUrl: 'partials/MyProjects.html'

        })
        .state('contact', {
            templateUrl: 'partials/Contact.html'

        })
        ;


});