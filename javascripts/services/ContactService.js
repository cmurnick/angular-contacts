"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {
		const getViewedContacts= (userUid) => {
			 let contacts = [];
			 return $q((resolve, reject) => {
			 	$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
			 		console.log("results", results);
			 		let fbContacts = results.data;
			 		
			 		console.log("fbContacts", fbContacts);

			 		// Object.keys(fbContacts).forEach((key) => {
	     //                fbContacts[key].id = key; 
	     //                contacts.push(fbContacts[key]);
	                	resolve(contacts);

			 	}).catch((err) => {
			 		reject(err);
			 		console.log("getViewedContacts screwed", err);
			 });
			 });
	 };
			
			 const postNewContact = (NewContact) => {
			 	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(NewContact));
		
			};
			 	return{getViewedContacts, postNewContact};

});
		




		


