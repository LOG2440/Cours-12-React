// ATTENTION : ceci ne fonctionne pas 
const Button = (_) => {
  let n = 0;
  return (
    <div>
      <p>Vous avez cliqué sur le bouton {n} fois</p>
      <button
        onClick={(_) => {
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
