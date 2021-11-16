const Paragraphs = () => {
  const paragraphes = ["Mon premier paragraphe", "Mon deuxième paragraphe", "Mon dernier paragraphe"];
  return (
    <div>
      {paragraphes.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
};

export default Paragraphs;
