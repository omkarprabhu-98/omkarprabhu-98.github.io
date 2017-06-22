/**
 * Created by Admin on 18-Jun-17.
 */



angular.module('HomePage').controller("userController",function($scope, $location, SharedDataService,  $rootScope,  $http) {

    //get user details
    $http(
        {
            method:"GET",
            url: "https://ieeespwd.herokuapp.com/api/users/" + SharedDataService.username

        }
    ).then(
        function (response){
            $scope.userData = response.data;

        }
    );





    }
);