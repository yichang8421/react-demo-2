import {useState, useLayoutEffect} from "react";

function App() {
    const [n, setN] = useState(0);

    useLayoutEffect(() => {
        document.getElementById('n').innerText = `n:1000`;
    }, [n]);

    return (
        <div id="n">
            n: {n}
            <br/>
            <button onClick={() => {
                setN(i => i + 1);
            }}>+1
            </button>
        </div>
    );
}

export default App;
