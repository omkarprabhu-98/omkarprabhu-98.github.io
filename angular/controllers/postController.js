/**
 * Created by Admin on 18-Jun-17.
 */
angular.module('HomePage').controller('postController', function($scope, $location, SharedDataService, $rootScope,  $http){

    // get post details
    $http(
        {
            method:"GET",
            url: "https://ieeespwd.herokuapp.com/api/posts/" +  SharedDataService.post_id

        }
    ).then(
        function (response){
            $scope.pContent = response.data.data[0];

        }
    );

});