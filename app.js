function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    function drawSongs(songList) {
        console.log(songList);
        // This is where you task begins
        //var songArray = []
        var template = ''
        var songElement = document.getElementById('song-list')
        for (i = 0; i < songList.length; i++) {
            var song = songList[i]
            template += `
          
            
     <div class = "panel panel-default col-xs-6 col-md-6 col-lg-6">
     <div class = "panel-body">    
     <div class = "img-container text-center"> 
                <img src="${song.albumArt}"/> 
          <span class="glyphicon glyphicon-music align-left" aria-hidden="true"></span>  
          <span class = "glyphicon glyphicon-music align-left" aria-hidden="true"></span>
          <span class="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
          <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
          <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
          <span class="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
          
          <h3>${song.title}</h3>
         <h4>${song.artist}</h4>
         <h5>${song.collection}</h5> 
         <h5>${song.price}</h5>
         
         <audio controls preload="none ">  
             <source src = ${song.preview}>
             </audio>
      </div>
      </div>
      </div>
      </div>
    
      `



        }
        songElement.innerHTML = template




    }
}


var itunesCtrl = new ItunesController()
