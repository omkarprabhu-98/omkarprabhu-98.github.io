/**
 * Created by Admin on 16-Jun-17.
 */

angular.module('HomePage').controller("homePageController",function($scope, $rootScope,  $http){

        this.logout = function(){

            $http({

                method: "POST",
                url: "https://ieeespwd.herokuapp.com/api/logout",
                data: {}
                }

            ).then(function successCallback(response){
                    // successful logout got to home page
                    window.location = "index.html"
                },
                function errorCallback(response) {

                    alert("Sorry: Try logout again")
                }
            );

        };





    }

);

