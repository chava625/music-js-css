const declareViewEvent = () => {
      //------search button
  document.querySelector("#search_btn").addEventListener("click", () => {
    let val = document.querySelector("#search_input").value;
      let url = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${val}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((body) => {
          data = body.data
          console.log(data);
          document.querySelector("#bar_title").innerHTML = "";
          document.querySelector("#bar_title").innerHTML = `
  <div class="grid_songs">
       <div>Audio</div>
       <div>Artist</div>
       <div class="d-none d-md-block">Album</div>
       <div class="d-none d-md-block">Rating</div>
   </div> 
  `;
  if (data === [] || data === 'undefined') {
    console.log('none');
      document.querySelector("#bar_res").innerHTML = "NO RESULTS";
  } else {
          data.forEach((item) => {
            let songs = new Song(
              "#bar_title", item.artist.picture_small,item.artist.name, item.title,item.preview,item.link,item.rank,item.album.title,item.rank
            );
              songs.renderSong();
            });
          }
        });
  });
      //------close search
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector("#search_input").value = "";
  });
      //------sort songs
  document.querySelector("#sort_select").addEventListener("change", () => {
    let sortVal = document.querySelector("#sort_select").value;
    let res = [];
    if (!sortVal) return;
    console.log("data", data);
    if (sortVal === "title") {
      res = data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        return 1;
      });
    } else if (sortVal === "rank") {
      res = data.sort((a, b) => a.rank - b.rank);
    }
    //------it is for all song
    //  else if (sortVal === "duration") {
    //   res = data.sort((a, b) => a.duration - b.duration);
    // }
    console.log(res);
    document.querySelector("#bar_title").innerHTML = "";
    renderAllSongs(res);
  });
      //------orderBy
  document.querySelector("#order").addEventListener("click", () => {
    if (orderBy) {
      orderBy = false;
      document.querySelector("#order span").innerHTML = "&#11205";
    } else {
      orderBy = true;
      document.querySelector("#order span").innerHTML = "&#x2BC6";
    }
    data = data.reverse();
    renderAllSongs(data);
  });
};
