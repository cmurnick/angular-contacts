'use strict';

app.controller("loginCtrl", function($location, $rootScope, $scope, AuthService){
  $scope.authenticate = () => {
    AuthService.authenticateGoogle().then((result) =>{
      $rootScope.uid = result.user.uid;
      $scope.$apply(() =>{
        $location.url("/view");
      });
    }).catch((err) =>{
      console.log("error in authenticateGoogle", err);
    });
  };
});