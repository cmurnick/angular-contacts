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
    .when("/view", {
      templateUrl: 'partials/view.html',
      controller: 'viewCtrl'
    })
    .when("/new", {
      templateUrl: 'partials/new.html',
      controller: 'newCtrl'
    })
    .when("/favorites", {
      templateUrl: 'partials/favorites.html',
      controller: 'favoritesCtrl'
    })
    .otherwise('/auth');
});