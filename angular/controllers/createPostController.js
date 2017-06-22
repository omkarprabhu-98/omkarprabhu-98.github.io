/**
 * Created by Admin on 18-Jun-17.
 */


angular.module('HomePage').controller("createPostController",function($scope, $location, $rootScope,  $http){



        this.submit = function(){

            // submit post
            $http(
                {
                    method:"POST",
                    url: "https://ieeespwd.herokuapp.com/api/posts/",
                    data: {

                        "title": $scope.title,
                        "content": $scope.content
                    }
                }
            ).then(function successCallback(response) {

                // load posts page
                $location.path("/posts");

            }, function errorCallBack(response){

                // error create post page
                $location.path("/post");
                alert("Please try again");

            });

        };

    }
);
