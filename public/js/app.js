(function(){
  angular.module('coverDrive', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      // handle any attempts to routes other than what's listed below:
      $urlRouterProvider.otherwise('/home.html')

      // my established routes
			$stateProvider
				.state('artists', {
					url: '/artists',
					templateUrl: 'partials/artists.html',
          // already have a controller set in index.html controller:'MainController as theController'
				})
        .state('login', {
					url: '/login',
					templateUrl: 'partials/login.html'
				})
        .state('signup', {
					url: '/signup',
					templateUrl: 'partials/signup.html'
				})
        //to play the video
        .state('videoplay', {
          url: '/videoplay/:videoId',
          templateUrl: 'partials/videoplay.html',
          //already have a controller set in index.html controller:'MainController as theController'
        })

    })
})() //end
