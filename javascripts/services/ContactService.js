"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {
		const getViewedContacts= (userUid) => {
			 let contacts = [];
			 return $q((resolve, reject) => {
			 	$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
			 		let fbContacts = results.data;
			 		
			 		Object.keys(fbContacts).forEach((key) => {
	                    fbContacts[key].id = key; 
	                    contacts.push(fbContacts[key]);
	                	resolve(contacts);
	                });
			 	}).catch((err) => {
			 		reject(err);
			 		console.log("getViewedContacts screwed", err);
			 });
			 });
	 		};
			
			 const postNewContact = (NewContact) => {
			 	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(NewContact));
		
			};

			const deleteContact = (contactId) => {
			return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
		};



			 	return{getViewedContacts, postNewContact, deleteContact};

});
		




		


