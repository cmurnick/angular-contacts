"use strict";

app.controller("editCtrl", function($rootScope, $location, $routeParams, $scope, ContactService) {
	$scope.contacts = [];

//was addContact from newCtrl.js
  $scope.editContact = (inputData) => {
    inputData.uid = $rootScope.uid;
 
    
		let newContact = ContactService.createContactObject(inputData);
		ContactService.postNewContact(newContact).then (() => {
      console.log("newContact", newContact);
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};
});