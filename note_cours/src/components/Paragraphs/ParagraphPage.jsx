import Article from "./Article";
import Paragraphs from "./Paragraphs";
import ParagraphsPairs from "./ParagraphsPairs";

const ParagraphPage = () => {
  return (
    <>
      <div>
        <h2>Paragraphes</h2>
        <Paragraphs />
      </div>
      <hr />
      <div>
        <h2>Paragraphes pairs seulement</h2>
        <h3>Trouvez la différence dans le HTML généré</h3>
        <ParagraphsPairs />
      </div>
      <hr />
      <div>
        <h2>Article et ses auteurs (passage par propriété)</h2>
        <Article title="Introduction à React" authors={["Nikolay Radoev", "Kevin Gauthier"]} />
        <Article title="React (suite)" authors={["Kevin Gauthier"]} />
      </div>
    </>
  );
};

export default ParagraphPage;
