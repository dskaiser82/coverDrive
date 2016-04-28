(function(){
  angular.module('coverDrive')
    .controller('MainController', MainController)

  MainController.$inject = ['spotifyService', 'tubeService', '$state', '$stateParams','$sce']

  function MainController (spotifyService, tubeService, $state, $stateParams, $sce){
    var vm = this
    vm.api = tubeService

/////////////////////////SPOTIFY API////////////////////////////////////////////
    spotifyService.index()
      .success(function(results){
        console.log(results)
          //we name spots and set the api object to entries.items
          //to easily bind on front-end
          vm.spots = results
          vm.top10 = vm.spots.slice(0,10)
          console.log(vm.spots)
      }) //end function spotifyService anonymous function

/////////////////////////youtube API////////////////////////////////////////////
      tubeService.index()
        .success(function(results){
          console.log("Hi Danny")
          //we name covers and set the api object to results.items
          //to easily bind on front-end
            vm.covers = results.items
        }) //end function spotifyService anonymous function

        //For Clicking on spotify chart and capturing artist name+title
        vm.getYouTube = function(artist, title){
          var query = artist + "+" + title;
          console.log(query);
          vm.api.search(query).success(function(results){
            vm.covers = results.items
            console.log(vm.covers)
          })
        }

//////////////////////For videoplay/:videoId///////////////////////////////////
        vm.getVideoId = function(videoId){
            // console.log(videoId)
            vm.videoId=videoId
          $state.go("videoplay", {"videoId":videoId})
              //we use to get distict youtube videos.  Use with trustSrc
              vm.videoUrl = "https://www.youtube.com/embed/" + videoId
              // console.log(vm.videoUrl, "This is the url")

              }
        //for Videoplay/video:id its own function to have Youtube
        //url as trusted search ONLY works this way
        vm.trustSrc = function(src){
          return $sce.trustAsResourceUrl(src)
        }



  } //end function MainController
})() //end
