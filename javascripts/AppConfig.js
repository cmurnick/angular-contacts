"use strict";

let isAuth = (AuthService) => new Promise ((resolve, reject) => {
  if (AuthService.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthService) {
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthService.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      // curreRoute.originalPath= '/search' -1 !==_1   appTo=false
      
      appTo = currRoute.originalPath.indexOf('/login') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/login');
    }
  });
});



app.config(function($routeProvider){
  $routeProvider
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when("/contacts/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'viewCtrl',
      resolve: {isAuth}
    })
    .when("/contacts/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'newCtrl',
       resolve: {isAuth}
    })
    .when("/contacts/favorites", {
      templateUrl: 'partials/contacts/favorites.html',
      controller: 'favoritesCtrl',
       resolve: {isAuth}
    })
    .when("/contact/:id", {
      templateUrl: 'partials/contacts/contact_detail.html',
      controller:'contactDetailCtrl',
      resolve: {isAuth}
    })
    .when("/contacts/edit/:id", {
      templateUrl: 'partials/contacts/edit.html',
      controller: 'editCtrl',
      resolve:{isAuth}
    })
    .otherwise('/login');
});







