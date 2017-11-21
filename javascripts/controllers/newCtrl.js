'use strict';

app.controller("newCtrl", function($location, $rootScope, $scope, ContactService){
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
  		"phone": contact.phone,
      "uid": $rootScope.uid
  	};

  };

  $scope.addContact = (inputData) => {
		let newContact = createContact(inputData);
		ContactService.postNewContact(newContact).then (() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};
});