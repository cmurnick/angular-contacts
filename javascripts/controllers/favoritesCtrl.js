'use strict';

app.controller("favoritesCtrl", function($location, $rootScope, $scope, ContactService){
  $scope.controller = "favoritesCtrl";

  const getContacts = () => {
		ContactService.getFavoriteContacts($rootScope.uid).then((results) => {
		$scope.contacts = results;
	}).catch((err) => {
		console.log("error in getContacts", err);
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


	// $scope.updateFavorite = (contact) => {
	// 	    if (!contact.favorite) {
	// 	      contact.favorite = true;
	// 	    } else {
	// 	      contact.favorite = false;
	// 	    }
	// 	    let updatedContact = ContactService.createContactObject(contact);
	// 	    ContactService.updateContact(updatedContact, contact.id).then(()=>{
	// 	    }).catch((err)=>{
	// 	      console.log("error in updateFavorite", err);
	// 	    });
	//   }; 

	$scope.switchFavorite = (contact, contactId) => {
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
});














