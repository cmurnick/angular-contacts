'use strict';

app.controller("viewCtrl", function($location, $rootScope, $scope, ContactService){
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
		ContactService.deleteContact(contactId).then((result) => {
			getContacts();
		}).catch((err) => {
			console.log("error in DeleteContact", err);
		});
	};

	$scope.switchFavorite = (contact, isFavorited) => {
		contact.favorite = isFavorited;
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, contact.id).then((result) => {
			getContacts();
		}).catch((err) => {
			console.log("error in update movie", err);
		});	
	};

	
	 $scope.contactDetail = (contactId) => {
		$location.path(`/contact/${contactId}`);
	};

	$scope.editContact = (contactId) => {
		$location.path(`/contact/edit/${contactId}`);
	};
 });






