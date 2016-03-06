
var OrderProController = angular.module('starter.controllers', ['ionic', 'firebase']);

// creating ref for firebas app to be used through script
var appRef = new Firebase("https://orderpro.firebaseio.com");

// creating variable for kitchen user id 
var kitchen_id = "1420e171-fbdc-4d90-8be5-ddb12a9ef4d7";
var owner_id = "0a33e660-68da-478b-b231-5bccf6e26fd2";

OrderProController.controller('LoginCtrl', function($scope, $state, $ionicPopup, $ionicLoading) { 

	// function to clear fields after login 
	$scope.clearFields = function() { 
		$scope.loginData.email = "";
		$scope.loginData.password = "";
	};

	// will hold login data 
	$scope.loginData = {};

	// login function
	// called when login button is clicked
	$scope.login = function() { 
		// checking if fields are empty
  		if (!$scope.loginData.email || !$scope.loginData.password) { 

  			// showing pop alert that fields are empty
  			var alert = $ionicPopup.alert({
  				title: 'Opss!', 
  				template: '<div align="center"><b>Please fill all fields!</b></div>'
  			});

  			alert.then(function(res) { 
  				// user clicked ok in alert
  			});
  		
  		} else { 
  			// fields are not empty
  			// showing ionic loading icon
  			$ionicLoading.show();

  			// auth using email and pwd 
  			appRef.authWithPassword({
  				// passing login info 
  				email: $scope.loginData.email, 
  				password: $scope.loginData.password

  			}, authHandler);
  		}
	};

	// defining authHandler (what happens after login)
	function authHandler(error, authData) { 
		if (error) { 
			// error logging in 

			// showing ionic alert popup
			var alert = $ionicPopup.alert({
				title: 'Opss!',
				template: '<div align="center"><b>Incorrect Email or password!</b></div>'
			});

			alert.then(function(res) { 
				// user clicked ok 
			});

			// hiding ionicLoading 
			$ionicLoading.hide(); 
		} else { 
			// login credentials exist
			// clearing login fields 
			$scope.clearFields();
			
			// checking if id is kitchen or owner
			if (authData.uid == kitchen_id) { 
				console.log(kitchen_id);
				// kitchen
				// hiding ionicLoading 
				$ionicLoading.hide(); 

				// routing to kitchen page 
				$state.go('kitchen');
			} else if (authData.uid == owner_id) { 
				console.log(owner_id);

				// owner 
				// hiding ionicLoading 
				$ionicLoading.hide(); 

				// routing to owner page 				
				$state.go('owner');
			}
		}

	};
});




OrderProController.controller('KitchenCtrl', function($scope) { });
OrderProController.controller('OwnerCtrl', function($scope) { })