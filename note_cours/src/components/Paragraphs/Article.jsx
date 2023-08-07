const Article = ({ title, authors = [] }) => {
  return (
    <article>
      <h1>{title}</h1>
      {authors.map((p) => (
        <p key={p.toString()}>{p}</p>
      ))}
    </article>
  );
};

export default Article;
