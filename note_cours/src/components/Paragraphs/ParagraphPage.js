import Article from "./Article";
import Paragraphs from "./Paragraphs";
import ParagraphsPairs from "./ParagraphsPairs";
const ParagraphPage = () => {
  return (
    <>
      <div>
        <p>Paragraphes</p>
        <Paragraphs />
      </div>
      <hr />
      <div>
        <p>Paragraphes pairs seulement</p>
        <ParagraphsPairs />
      </div>
      <hr />
      <div>
        <p>Article et ses auteurs</p>
        <Article title="React Tutorial" authors={["Nikolay Radoev", "Kevin Gauthier"]} />
      </div>
    </>
  );
};

export default ParagraphPage;
