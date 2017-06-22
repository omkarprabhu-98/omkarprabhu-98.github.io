/**
 * Created by Admin on 15-Jun-17.
 */

angular.module('SignIn').controller("logInController",function($scope, $rootScope,  $http){



        this.submit = function(){

            // login with username and password
            $http(
                {
                    method:"POST",
                    url: "https://ieeespwd.herokuapp.com/api/users/"+ $scope.username,
                    data: {

                        "password": $scope.password
                    }
                }
            ).then(function successCallback(response) {

                // check errorCode for invalid login data
                if (response.data.hasOwnProperty('errorCode') || response.data['statusText'] === "Invalid UserName" || response.data['statusText'] === "Invalid Password"){
                    // error load signUp page
                    window.location = "index.html";
                    alert("Invalid Username or password");
                }
                else {

                    // load home page if logged in
                    window.location =  "homeIndex.html";
                }

            }, function errorCallBack(response){

                // error load signUp page
                window.location = "index.html";
                alert("Sorry, Connection Problem");

            });
        };

    }
);
