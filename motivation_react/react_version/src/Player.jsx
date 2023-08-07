/**
 * Component de React pour afficher un lien pour jouer une chanson
 * @param {{song: {spotify:string}}} params 
 */
const Player = ({ song }) => {
    return <a href={song.spotify}> Spotify Link</a>;
};

export default Player;
