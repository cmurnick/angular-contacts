'use strict';

app.controller("newCtrl", function($location, $rootScope, $scope, ContactService){
  $scope.contacts = [];

  $scope.addContact = (inputData) => {
    inputData.uid = $rootScope.uid;
    inputData.favorite = false;
    
		let newContact = ContactService.createContactObject(inputData);
		ContactService.postNewContact(newContact).then (() => {
      console.log("newContact", newContact);
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};
});