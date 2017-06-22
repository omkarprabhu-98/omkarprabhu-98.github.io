/**
 * Created by Admin on 18-Jun-17.
 */



angular.module('HomePage').controller('postsController', function($scope, $location, SharedDataService, $rootScope,  $http){

    $('.collapsible').collapsible();

    $http(
        {
            method:"GET",
            url: "https://ieeespwd.herokuapp.com/api/posts"

        }
    ).then(
        function (response){
            $scope.posts = response.data.data;
            console.log($scope.posts);
        }
    );


    this.postContent = function(index){



        SharedDataService.post_id = $scope.posts[index]['_id'];
        $location.path("/postDetails");


    }




    }



);

