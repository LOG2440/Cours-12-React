import { useState, useEffect } from 'react';

const HookEffect = () => {
    const [n, setN] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${n} fois`;
    });

    return (
        <div>
            <p>Vous avez cliqué {n} fois</p>
            <button onClick={() => setN(n + 1)}>Cliquez ici</button>
        </div>
    )
};

export default HookEffect;