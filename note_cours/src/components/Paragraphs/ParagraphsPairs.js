const ParagraphsPairs = () => {
  const paragraphes = ["Mon premier paragraphe", "Mon deuxième paragraphe", "Mon dernier paragraphe"];
  return (
    <div>
      {paragraphes
        .filter((_, i) => (i + 1) % 2 === 0)
        .map((p) => (
          <p>{p}</p>
        ))}
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
