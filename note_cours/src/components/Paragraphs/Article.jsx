const Article = ({ title, authors = [] }) => {
  return (
    <article>
      <h3>{title}</h3>
      {authors.map((p) => (
        <p key={p.toString()}>{p}</p>
      ))}
    </article>
  );
};

export default Article;
