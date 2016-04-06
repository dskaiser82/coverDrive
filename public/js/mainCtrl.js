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
          vm.top10 = vm.spots.slice(0,10)
          console.log(vm.top10)
      }) //end function spotifyService anonymous function

      tubeService.index()
        .success(function(results){
          console.log("Hi Danny")
          //we name covers and set the api object to results.items
          //to easily bind on front-end
            vm.covers = results.items

        }) //end function spotifyService anonymous function

        vm.getYouTube = function(artist, title, tubeService){
          var query = artist + "+" + title;
          console.log(query);
          tubeService.search(query)
        }
  } //end function MainController
})() //enc
