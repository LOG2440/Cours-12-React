/* L'interpolation nécessite des éléments HTML à insérer
  React a besoin d'une valeur unique pour identifier les éléments d'un tableau qui ont changé,
  sinon tous les éléments du tableau sont reconstruits au complet.
  On utilise l'attribut "key". Note : évitez l'utilisation de l'index comme clé unique
*/
const Paragraphs = () => {
  const paragraphes = ["Mon premier paragraphe", "Mon deuxième paragraphe", "Mon dernier paragraphe"];
  return (
    <div>
      {paragraphes.map((p,i) => (<p key={i}>{p}</p>))}
    </div>
  );
};
export default Paragraphs;

/* Syntaxe équivalente 
const pElements = paragraphes.map((p,i) => <p key={i}>{p}</p>);
return (
  <div>
    {pElements}
  </div>
);
*/