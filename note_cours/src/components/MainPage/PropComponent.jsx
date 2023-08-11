// Composante fonctionnelle avec des propriétés
const PropComponent = ({ title, paragraphe }) => {
    // Exemple de Fragment <>...</> qui est retiré du HTML final
    return (
        <>
            <h1>{title}</h1>
            <p>{paragraphe}</p>
        </>
    )
};

export default PropComponent;
