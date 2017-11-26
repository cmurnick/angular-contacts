"use strict";

app.controller("editCtrl", function($rootScope, $location, $routeParams, $scope, ContactService) {
	$scope.contacts = [];

  $scope.editContact = (inputData) => {
    inputData.uid = $rootScope.uid;
	};
 
   const getContactInfo = () => {
		ContactService.getSingleContact($routeParams.id).then((results) =>{
			$scope.contact=results.data;
		}).catch((err) => {
			console.log("Err in Getsinglecontact", err);
			});
		};
	
	getContactInfo();

	$scope.updateEditedContact = (contact, contactId) => {
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, $routeParams.id).then((result) => {
			getContactInfo();
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in update movie", err);
		});	
	};
});




