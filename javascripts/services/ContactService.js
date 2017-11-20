"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {
		const getViewedContacts= (userUid) => {
			 let contacts = [];
			 return $q((resolve, reject) => {
			 	$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
			 		let fbContacts = results.data;
			 		
			 		Object.keys(fbContacts).forEach((key) => {
                    fbContacts[key].id = key; 
                    // if(!fbContacts[key].favorite){
                    contacts.push(fbContacts[key]);
                	// }
                	resolve(contacts);
              	});
			 	}).catch((err) => {
			 		reject(err);
			 		console.log("getViewedContacts screwed", err);
			 });
			 });
	 		};
			
		const getFavoriteContacts= (userUid) => {
		 let contacts = [];
		 return $q((resolve, reject) => {
		 	$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
		 		console.log("results", results);
		 		let fbContacts = results.data;

		 		Object.keys(fbContacts).forEach((key) => {
                    fbContacts[key].id = key; 
                    if(fbContacts[key].favorite){
                    contacts.push(fbContacts[key]);
                	}
                	resolve(contacts);
              	});
		 	}).catch((err) => {
		 		reject(err);
		 		console.log("getFavoriteContacts", err);
		 });
		 });
	};

		const createContactObject = (contact) => {
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
				"uid": contact.uid,
				"favorite": contact.favorite
			};
		};

		 const postNewContact = (NewContact) => {
		 	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(NewContact));
	
		};

		const deleteContact = (contactId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};

		const updateContact = (contact, contactId) => {
			return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));

		};

		const getSingleContact = (contactId)=> {
				return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
			};

		return{getViewedContacts, postNewContact, deleteContact, getFavoriteContacts, createContactObject, updateContact, getSingleContact};

});
		




		


