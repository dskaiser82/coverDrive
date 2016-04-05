(function(){
  angular.module('coverDrive')
    .controller('MainController', MainController)

  MainController.$inject = ['spotifyService', 'tubeService', '$state']

  function MainController (spotifyService, tubeService, $state){
    var vm = this

    spotifyService.index()
      .success(function(results){
        console.log(results)
          //we name spots and set the api object to entries.items
          //to easily bind on front-end
          vm.spots = results.entries.items
      }) //end function spotifyService anonymous function

      tubeService.index()
        .success(function(results){
          console.log(results)
          //we name covers and set the api object to results.items
          //to easily bind on front-end
            vm.covers = results.items

        }) //end function spotifyService anonymous function
  } //end function MainController
})() //enc
