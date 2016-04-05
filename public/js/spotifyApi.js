(function(){
  // angular.module('spotifyApi', [])
  angular.module('coverDrive')
    .factory('spotifyService', spotifyService)

      spotifyService.$inject = ['$http']

      function spotifyService($http){
        var apiUrl = '/api'
        var service = {
          index: index,
          // show:show
        } // end var service
        return service

        function index(){


          //shows top 100 spotify - will need to get less
          console.log("Getting Spotify Charts")
          return $http.get('api/spotify')
        }


      } //end function


})()
