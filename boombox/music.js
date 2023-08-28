let artistLineup = [
    {
      id: "artist1",
      artist: "./images/m83_artist.png",
      album: "./images/m83_album .png",
      spotify: "https://open.spotify.com/embed/track/6GyFP1nfCDB8lbD2bG0Hq9?utm_source=generator",
      songname: "Midnight City"
    },
    {
      id: "artist2",
      artist: "./images/Danielceaser_artist.png",
      album: "./images/Danielceaser_album.png",
      spotify: "https://open.spotify.com/embed/track/6q4yusLwjDYEcF6jXHdt7J?utm_source=generator",
      songname: "Do you like me?"
    },
    {
      id: "artist3",
      artist: "./images/Tyler_artist.png",
      album: "./images/Tyler_album.png",
      spotify: "https://open.spotify.com/embed/track/5TxRUOsGeWeRl3xOML59Ai?utm_source=generator",
      songname: "Are we still friends?"
    }
  ]
    
  
  let chart = document.getElementById("parentsparent");
  
  let generateChart = () => {
  
      return (chart.innerHTML = artistLineup.map((x) => {
          return `
          <div class="parent" >
        
          <img id="boombox" src="./images/boombox.jpeg" alt="boombox">
              <div class="songname">
                  <p id="name">${x.songname}</p>
              </div>
          <img class="artist" src="${x.artist}" alt="m83artist">
          <img class="album" src="${x.album}" alt="m83artist">
      </div>
      <br>
      <div>
          <iframe class="spotify" style="border-radius:12px" src="${x.spotify}"  height="142" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
  
      
      `
  })
  
  .join(""));
  };
  
  
  
  generateChart();



  let currentSongIndex = 0;
const totalSongs = artistLineup.length;

let updateSong = (index) => {
    const currentSong = artistLineup[index];
    chart.innerHTML = `
        <div class="parent" >
            <img id="boombox" src="./images/boombox.jpeg" alt="boombox">
            <div class="songname">
                <p>${currentSong.songname}</p>
            </div>
            <img class="artist" src="${currentSong.artist}" alt="artist">
            <img class="album" src="${currentSong.album}" alt="album">
        </div>
        <br>
        <br>
        <br>
        <div>
            <iframe class="spotify" style="border-radius:12px" src="${currentSong.spotify}" height="142" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `;
};

let nextButton = document.getElementById("next-button");
let prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % totalSongs;
    updateSong(currentSongIndex);
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + totalSongs) % totalSongs;
    updateSong(currentSongIndex);
});

updateSong(currentSongIndex);



