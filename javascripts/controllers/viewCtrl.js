'use strict';

app.controller("viewCtrl", function($scope, ContactService){
  $scope.controller = [];

  const showContactsInView = () => {
  	ContactService.getViewedContacts().then((results) =>{
				$scope.contacts = results.data.results;
			console.log("contacts?", results.data.results);
		}).catch((err) => {
			console.log("error in searchcontacts", err);
		});
		};
		showContactsInView();
	});

 