/* Ceci ne fonctionne pas
   Par défaut, les variable sont propres à chaque exécution de la fonction
   Même si on affiche n+1 à  chaque fois, on ne notifie pas le DOM du changement
*/
const Button = (_) => {
  let n = 0;
  return (
    <div>
      <p>Vous avez cliqué sur le bouton {n} fois</p>
      <button
        onClick={() => {
          n += 1;
          console.log(n);
        }}
      >
        Cliquez Ici!
      </button>
    </div>
  );
};

export default Button;
