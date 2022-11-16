const SONGS = [
  {
    img: "https://i.scdn.co/image/ab67616d0000b273ddf2f9edabd166c60047e3c4",
    title: "It's All Good",
    time: "4:04",
    author: "Will Smith",
    spotify: "https://open.spotify.com/track/4oxNuPNxMm2gLq2uPZLzol?si=1fe5ec7f3bff4183",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Hammer_Touch.jpg",
    title: "U Can't Touch This",
    time: "4:17",
    author: "MC Hammer",
    spotify: "https://open.spotify.com/track/1B75hgRqe7A4fwee3g3Wmu?si=634b46f1535f435d",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51jXD8hh2EL.__AC_SX300_SY300_QL70_ML2_.jpg",
    title: "Gangsta's Paradise",
    time: "4:00",
    author: "Coolio",
    spotify: "https://open.spotify.com/track/1DIXPcTDzTj8ZMHt3PDt8p?si=eb8d27710f634cd8",
  },
];

function Player(song) {
  const player = document.createElement("div");
  player.innerHTML = `<a href='${song.spotify}'> Spotify Link</a>`;
  return player;
}

function Song(song) {
  const songContainer = document.createElement("div");
  songContainer.setAttribute("class", "img-data");

  // Compacte, mais couteux en performance
  songContainer.innerHTML = `
  <img src=${song.img} alt='${song.title}'></img>
  <div>
    <p>Title : ${song.title}</p>
    <p>Artist : ${song.author}</p>
    <p>Duration : ${song.time}</p>
  </div>
  ${Player(song).innerHTML}`;
  return songContainer;

  // Méthode plus longue, mais plus optimale
  const songImage = document.createElement("img");
  songImage.setAttribute("src", song.img);
  songContainer.appendChild(songImage);

  const songInfoContainer = document.createElement("div");
  songContainer.appendChild(songInfoContainer);

  const songTitle = document.createElement("p");
  songTitle.textContent = `Title : ${song.title}`;
  songInfoContainer.appendChild(songTitle);

  const songAuthor = document.createElement("p");
  songAuthor.textContent = `Author : ${song.author}`;
  songInfoContainer.appendChild(songAuthor);

  const songDuration = document.createElement("p");
  songDuration.textContent = `Duration : ${song.time}`;
  songInfoContainer.appendChild(songDuration);

  const songLink = Player(song);
  songContainer.append(songLink);

  return songContainer;
}

window.onload = () => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  const songElements = SONGS.map((song) => Song(song));
  root.append(...songElements);

  // Ou avec innerHTML
  // root.innerHTML = `${SONGS.map((song) => Song(song).outerHTML)}`;
};
