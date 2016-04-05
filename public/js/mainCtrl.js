(function(){
  angular.module('coverDrive')
    .controller('MainController', MainController)

  MainController.$inject = ['spotifyService', '$state']

  function MainController (spotifyService, $state){
    var vm = this

    spotifyService.index()
      .success(function(results){
        res.json(results)
  		 //what does this do?
      }) //end function spotifyService anonymous function
  } //end function MainController
})() //enc
