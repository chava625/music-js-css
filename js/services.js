
  const renderAllSongs =(songs)=> {
    document.querySelector("#bar_title").innerHTML = "";
    document.querySelector("#bar_title").innerHTML = `
    <div class="grid_songs">
         <div>Audio</div>
         <div>Artist</div>
         <div class="d-none d-md-block">Album</div>
         <div class="d-none d-md-block">Rating</div>
     </div> 
    `;
    songs.forEach((song) => {
      let songs = new Song(
        "#bar_title",
        song.artist.picture_small,
        song.artist.name,
        song.title,
        song.preview,
        song.link,
        song.rank,
        song.album.title,
        song.rank
      );
      songs.renderSong();
    });
  }