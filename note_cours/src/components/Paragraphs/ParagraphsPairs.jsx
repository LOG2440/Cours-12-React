/* On peut avoir n'importe quel type de code dans une interpolation en autant qu'on retourne une valeur
   Ici, le manque d'attribut "key" lors des itérations va générer un avertissement dans la console
*/
const ParagraphsPairs = () => {
  const paragraphes = ["Mon premier paragraphe", "Mon deuxième paragraphe", "Mon dernier paragraphe"];
  return (
    <div>
      {paragraphes
        .filter((_, i) => (i + 1) % 2 === 0)
        .map((p) => ( <p>{p}</p> ))}
      <p style={{ fontWeight: "bold" }}>Filtrage dans la fonction map : </p>
      {paragraphes.map((p, i) => {
        if ((i + 1) % 2 === 0) {
          return <p>{p}</p>;
        } else {
          return <p></p>;
        }
      })}
    </div>
  );
};

export default ParagraphsPairs;
