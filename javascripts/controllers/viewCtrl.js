'use strict';

app.controller("viewCtrl", function($rootScope, $scope, ContactService){
  $scope.contacts = [];

  const getContacts = () => {
		ContactService.getViewedContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getfuckingMovies", err);
		});

	};

	getContacts();

	$scope.deleteContact = (contactId) => {
		console.log("in Delete Contacts");
		ContactService.deleteContact(contactId).then((result) => {
			console.log("deleted?", result);
			getContacts();
		}).catch((err) => {
			console.log("error in DeleteMovie", err);
		});
	};
 });