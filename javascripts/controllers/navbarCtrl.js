"use strict";

app.controller("navbarCtrl", function ($location, $rootScope, $scope, $window, AuthService) {
	$scope.logoutUser = () => {
		delete $rootScope.uid;
		$window.localStorage.clear();
		AuthService.logout();
		$location.path('./login');
	};
});