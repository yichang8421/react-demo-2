import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";

function App() {
    const [n, setN] = useState(0);
    const count = useRef(0);

    const [, set_] = useState(null);

    return (
        <div id="n">
            n: {n}
            <br/>
            <button onClick={() => {
                setN(i => i + 1);
            }}>n+1
            </button>
            <hr/>
            count.current: {count.current}
            <br/>
            <button onClick={() => {
                count.current++;
                console.log(count.current);
                // ReactDOM.render(
                //     <App/>
                //     , document.getElementById('root'));
                set_(Math.random());
            }}>count.current+1
            </button>
        </div>
    );
}

export default App;
