import Player from "./Player";

function Song({ song }){
  return (
    <div className="img-data">
      <img src={song.img} alt={`${song.title} cover`}></img>
      <div>
        <p>Title : {song.title}</p>
        <p>Artist : {song.author}</p>
        <p>Duration : {song.time}</p>
      </div>
      <Player song={song}></Player>
    </div>
  );
};

export default Song;
