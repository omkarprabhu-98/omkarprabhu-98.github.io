/**
 * Created by Admin on 16-Jun-17.
 */


angular.module('HomePage').controller("usersController",function($scope, $location, SharedDataService,  $rootScope,  $http){

    // request all users names and usernames
    $http(
        {
            method:"GET",
            url: "https://ieeespwd.herokuapp.com/api/users"

        }
    ).then(
        function (response){
        $scope.userData = response.data.data;
    }
    );

    this.loadUserPage = function(index){
            SharedDataService.username = $scope.userData[index].username;
            $location.path("/user");


    }




    }


);
