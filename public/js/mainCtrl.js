(function(){
  angular.module('coverDrive')
    .controller('MainController', MainController)

  MainController.$inject = ['spotifyService', 'tubeService', '$state']

  function MainController (spotifyService, tubeService, $state){
    var vm = this

    spotifyService.index()
      .success(function(results){
        res.json(results)
      }), //end function spotifyService anonymous function

      tubeService.index()
        .success(function(results){
          res.json(results)
        }) //end function spotifyService anonymous function
  } //end function MainController
})() //enc
