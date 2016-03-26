/**
 * Created by Bishaka on 25/03/2016.
 */

var
    apiHost = "https://bt-njsmoviestoday.rhcloud.com";
    moviestoday = angular.module("moviestoday",[])
    .controller("mainCtrl",["$scope","$http",function($scope,$http){
        console.log("We up and running");
            $scope.loadingCinemas = true;
            $http.get(apiHost+"/api/v2/all").success(function(data){
                $scope.loadingCinemas = false;
                $scope.cinemas = data;
                console.log(data);
            })
    }])
;