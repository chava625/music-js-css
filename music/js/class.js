class Song{
    constructor(_parent, _img, _artist, _song, _mp3, _link, _rank, _album, _rating) {
        this.parent = _parent;
        this.img = _img;
        this.artist = _artist;
        this.song = _song;
        this.mp3 = _mp3;
        this.link = _link;
        this.rank = _rank;
        this.album = _album;
        this.rating = this.ratingNum(_rating);
    }
    renderSong(){
        let newDiv = document.createElement("div");
        newDiv.className = "grid_songs shadow";
        document.querySelector(this.parent).append(newDiv);

        let divArtist = document.createElement("div");
        divArtist.className = "d-flex center";
        newDiv.append(divArtist);
        divArtist.innerHTML +=
            `<figure class="my-0 mr-5">
                    <img src="${this.img}" class="rounded-circle width="50">
                </figure>`;

        let playPause = document.createElement("div");
        playPause.className = "play center";
        divArtist.append(playPause);
        playPause.innerHTML = `
        <div class="audio-player">
  <audio controls src="${this.mp3}"></audio>
  
</div>

        `;
        newDiv.innerHTML +=
            `<div class="song_name">
                <h3 class="display-4 sm_title">${this.song}</h3>
                <div class="secTxt">${this.artist}</div>
            </div>
            <div class="d-none d-md-block">${this.album}</div>
            <div class="d-none d-md-block">${this.rating}&nbsp&nbsp
            </div>`
    }
    showTime(_secs) {
        let mins = Math.floor(_secs / 60);
        let secs = _secs % 60;
    
        if (mins < 10) {
            mins = "0" + mins;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        return mins + ":" + secs;
    }
    ratingNum = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

