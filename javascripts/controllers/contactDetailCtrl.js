"use strict";

app.controller("contactDetailCtrl", function($routeParams, $scope, ContactService) {
	$scope.contact = {};

	console.log("Contactid", $routeParams.id);

	const getContact = () => {
		ContactService.getSingleContact($routeParams.id).then((results) =>{
			$scope.contact=results.data;
			console.log("contactDetailCtrlgtContact", results.data);
		}).catch((err) => {
			console.log("Err in Getsinglecontact", err);
			});
		};
	
			

	getContact();


	$scope.switchFavorite = (contact, contactId) => {
		contact.favorite = true;
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, $routeParams.id).then((result) => {
			getContact();
		}).catch((err) => {
			console.log("error in update contact", err);
		});
	};

	$scope.switchToNotFavorite = (contact, contactId) => {
		contact.favorite = false;
		let updatedContact = ContactService.createContactObject(contact);
		ContactService.updateContact(updatedContact, $routeParams.id).then((result) => {
			console.log("is switchFavorite working", result);
			getContact();
			// favoriteStarChange();
		}).catch((err) => {
			console.log("error in update movie", err);
		});	
	};



	$scope.contactChange = (event, contact) => {
		console.log("event", event);
		console.log("contact", contact);
		if(event.favorite) {
			contact.favorite = event.favorite;
			let updatedContact = ContactService.createContactObject(contact);
			console.log("ontact Change contactDetailCtrl", updatedContact);
			ContactService.updateContact(updatedContact, $routeParams.id).then(() => {
				getContact();
			}).catch ((err) =>  {
				console.log("error in updatedContact", err);
			});
		}
	};
});