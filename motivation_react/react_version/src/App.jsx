import Song from "./Song.jsx";
import SONGS from "./songs";

function App() {
  const song = {
    img: "https://i.scdn.co/image/ab67616d0000b273ddf2f9edabd166c60047e3c4",
    title: "Miami",
    time: "3:17",
    author: "Will Smith",
    spotify: "https://open.spotify.com/track/6e8Ou0wiqAzIpWb2eSxll8?si=5ce8ea80e2744504",
  };

  return (
    <>
      <Song song={song}></Song>
      {SONGS.map((song) => (
        <Song key={song.title} song={song}></Song>
      ))}
    </>
  );
}

export default App;