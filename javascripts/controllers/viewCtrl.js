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
			console.log("error in DeleteContact", err);
		});
	};

	// $scope.updateFavorite = (contact) => {
	//     if (!contact.favorite) {
	//       contact.favorite = true;
	//     } else {
	//       contact.favorite = false;
	//     }
	//     let updatedContact = ContactService.createContactObject(contact);
	//     ContactService.updateContact(updatedContact, contact.id).then(()=>{
	//     }).catch((err)=>{
	//       console.log("error in updateFavorite", err);
	//     });
  // }; 
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

	//   $scope.menuItems = ['Home', 'Contact', 'About', 'Other'];
	// 	$scope.activeMenu = $scope.menuItems[0];

 //   		$scope.setActive = function(menuItem) {
 //    	$scope.activeMenu = menuItem
 // };


	// $scope.favoriteChange = (event, contact) => {
	// 	console.log("event", event);
	// 	console.log("contact", contact);
	// 	if(event.favorite) {
	// 		contact.favorite = event.favorite;

	// 		let updatedContact = ContactService.createContactObject(contact);
	// 		ContactService.updateContact(updatedContact, contact.id).then(() => {
	// 			getContacts();
	// 		}).catch ((err) =>  {
	// 			console.log("error in favoriteStarChange", err);
	// 		});
	// 	}
	// };

	
 });






