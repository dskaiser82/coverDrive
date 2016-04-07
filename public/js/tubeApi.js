(function(){
  // angular.module('spotifyApi', [])
  angular.module('coverDrive')
    .factory('tubeService', tubeService)

      tubeService.$inject = ['$http']

      function tubeService($http){
        var apiUrl = '/api'
        var service = {
          index: index,
          search:search
        } // end var service
        return service


        //we use search below to really get the youtube jpegs
        function index(){

          console.log("Getting Youtube Charts")
          return $http.get('api/youtube')  //+ query)
        }

        function search(query){
          console.log("yyyesssss")
          return $http.get("/api/youtube?search="+query)
        }

      } //end function


})()
