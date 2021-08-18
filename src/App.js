import {useState, useLayoutEffect, useEffect} from "react";

function App() {
    const [n, setN] = useState(0);

    useEffect(() => {
        console.log(1);
    },[n])

    useLayoutEffect(() => {
        console.log(2);
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
