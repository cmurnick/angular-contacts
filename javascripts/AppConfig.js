"use strict";

app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider){
  $routeProvider
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when("/contacts/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'viewCtrl'
    })
    .when("/contacts/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'newCtrl'
    })
    .when("/contacts/favorites", {
      templateUrl: 'partials/contacts/favorites.html',
      controller: 'favoritesCtrl'
    })
    .otherwise('/login');
});