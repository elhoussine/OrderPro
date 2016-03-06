// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var OrderProApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);


// defining states for further navigation through the App 
OrderProApp.config(function($stateProvider, $urlRouterProvider) { 

// first we define what happens if no state is defined 
$urlRouterProvider.otherwise('/');

// defining different states
$stateProvider

.state('login', {
  url: '/',
  controller: 'LoginCtrl', 
  templateUrl: 'templates/login.html'
})

.state('kitchen', { 
  url: '/kitchen', 
  controller: 'KitchenCtrl', 
  templateUrl: 'templates/kitchen.html'
})

.state('owner', { 
  url: '/owner',
  controller: 'OwnerCtrl',
  templateUrl: 'templates/owner.html'
});
});


// Predefined (from ionic) config of app 
OrderProApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
