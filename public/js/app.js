(function(){
  angular.module('coverDrive', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      // handle any attempts to routes other than what's listed below:
      $urlRouterProvider.otherwise('/')

      // my established routes
			$stateProvider
				.state('artists', {
					url: '/',
					templateUrl: 'partials/artists.html'
				})


    })
})() //end
