(function(){
  angular.module('spotifyApi', [])
    .factory('spotifyService', spotifyService)

      spotifyService.$inject = ['$http']

      function spotifyService($http){
        var service = {

          index: index,
          show:show
        } // end var service
        return service

        function index(){
          var spotUrl = "https://spotifycharts.com/api/?type=regional&country=global&recurrence=daily&date=latest&limit=30&offset=0"

          //shows top 100 spotify - will need to get less
          console.log("Getting Spotify Charts")
          return $http.get(spotUrl)
        }


      } //end function


})()
