'use strict';

app.controller("newCtrl", function($location, $scope, ContactService){
  $scope.contacts = [];

  const createContact = (contact) => {
  	return {
  		"firstName": contact.firstName,
  		"lastName": contact.lastName,
  		"company": contact.company,
  		"address": contact.address,
  		"city": contact.city,
  		"state": contact.state,
  		"zip": contact.zip,
  		"email": contact.email,
  		"phone": contact.phone
  	};

  };

  $scope.addContact = (inputData) => {
		let newContact = createContact(inputData);
		ContactService.postNewContact(newContact).then (() => {
			$location.path('/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};
});