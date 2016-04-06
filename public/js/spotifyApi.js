(function(){

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
          //shows top 100 spotify
          console.log("Getting Spotify Charts")
          return $http.get('api/spotify')
        }

        // function show(){
        //   return $http.get('')
        // }





      } //end function


})()
