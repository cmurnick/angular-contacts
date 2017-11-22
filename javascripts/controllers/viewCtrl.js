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
		console.log("in Delete Contacts");
		ContactService.deleteContact(contactId).then((result) => {
			console.log("deleted?", result);
			getContacts();
		}).catch((err) => {
			console.log("error in DeleteContact", err);
		});
	};

	
	$scope.switchFavorite = (contact, contactId) => {
		contact.favorite = true;
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, contact.id).then((result) => {
			console.log("is switchFavorite working", result);
			getContacts();
			// favoriteStarChange();
		}).catch((err) => {
			console.log("error in update movie", err);
		});	
	};

	$scope.switchToNotFavorite = (contact, contactId) => {
		contact.favorite = false;
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, contact.id).then((result) => {
			console.log("is switchFavorite working", result);
			getContacts();
			// favoriteStarChange();
		}).catch((err) => {
			console.log("error in update movie", err);
		});	
	};

	 $scope.contactDetail = (contactId) => {
		$location.path(`/contact/${contactId}`);
		console.log("path working:", contactId);
	};

	$scope.editContact = (contactId) => {
		$location.path(`/contact/edit/${contactId}`);
		console.log("path working:", contactId);
	};
 });






