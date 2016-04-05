(function(){
  // angular.module('spotifyApi', [])
  angular.module('coverDrive')
    .factory('tubeService', tubeService)

      tubeService.$inject = ['$http']

      function tubeService($http){
        var apiUrl = '/api'
        var service = {
          index: index,
          // show:show
        } // end var service
        return service

        function index(){
          //shows top 100 spotify - will need to get less
          console.log("Getting Youtube Charts")
          return $http.get('api/youtube')
        }


      } //end function


})()
