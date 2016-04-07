(function(){
  angular.module('coverDrive', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      // handle any attempts to routes other than what's listed below:
      $urlRouterProvider.otherwise('/')

      // my established routes
			$stateProvider
				.state('artists', {
					url: '/',
					templateUrl: 'partials/artists.html',
          controller:'MainController as theController'
				})
        .state('login', {
					url: '/login',
					templateUrl: 'partials/login.html'
				})
        .state('signup', {
					url: '/signup',
					templateUrl: 'partials/signup.html'
				})
        .state('videoplay', {
          url: '/videoplay/:videoId',
          templateUrl: 'partials/videoplay.html',
          controller:'MainController as theController'
        })

    })
})() //end
