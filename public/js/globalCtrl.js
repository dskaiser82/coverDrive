(function(){
  angular.module('coverDrive')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })
  .controller('GlobalController', GlobalController)
  .factory('authInterceptor', authInterceptor)
  .service('user', userService)
  .service('auth', authService)
  .constant('API', '/api')


  GlobalController.$inject = ['auth', 'user', '$state']

  function GlobalController(auth, user, $state){
    var vm = this

    vm.loginUser = {}

    vm.title = "The Global Controller"
    console.log(vm.title)

    //Handles Code on Login 
    function handleRequest(res) {
      var token = res.data ? res.data.token : null;
      if(token) {
        console.log('JWT:', token);
        $state.go('artists')
        alert('Welcome to the site.')
      }
      if(!token) {console.log("No token given back :(")}
      self.message = res.data.message;
    }

    vm.login = function() {
      user.login(vm.loginUser.email, vm.loginUser.password)
        .then(handleRequest, handleRequest)
    }
    vm.register = function() {
      user.register(vm.loginUser.email, vm.loginUser.password)
        .then(handleRequest, handleRequest)
    }
    vm.logout = function() {
      user.logout && user.logout()
    }
    vm.isAuthed = function() {
      return auth.isAuthed ? auth.isAuthed() : false
    }

  }





  // BREAK THIS OUT LATER:


  function authInterceptor(API, auth) {
    return {
      // automatically attach Authorization header
      request: function(config) {
        var token = auth.getToken();
        if(token) {
          config.headers['x-access-token'] = token;
        }

        return config;
      },

      // If a token was sent back, save it
      response: function(res) {
        if(res.data.token) {
          auth.saveToken(res.data.token);
        }
        return res;
      },
    }
  }

  function authService($window) {
    var self = this;

    // Add JWT methods here
    self.parseJwt = function(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse($window.atob(base64));
    }

    self.saveToken = function(token) {
      $window.localStorage['jwtToken'] = token;
    }

    self.getToken = function() {
      return $window.localStorage['jwtToken'];
    }

    self.isAuthed = function() {
      var token = self.getToken();
      if(token) {
        var params = self.parseJwt(token);
        return Math.round(new Date().getTime() / 1000) <= params.exp;
      } else {
        return false;
      }
    }
  }

  function userService($http, API, auth, $window) {
    var self = this;

    self.login = function(email, password) {
      return $http.post(API + '/authenticate', {
          email: email,
          password: password
        })
    };

    self.logout = function() {
      $window.localStorage.removeItem('jwtToken');
    }

    // add authentication methods here

  }
})()
