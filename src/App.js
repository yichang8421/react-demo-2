import {useState, createContext, useContext} from "react";

const C = createContext(null);

function App() {
    const [n, setN] = useState(0);
    const api = {n, setN};

    return (
        <C.Provider value={api}>
            <Child/>
        </C.Provider>
    );
}

const Child = () => {
    const {n, setN} = useContext(C);

    return (
        <div>
            child n: {n}
            <br/>
            <button onClick={() => {
                setN(i => i + 1);
            }}>+1
            </button>
        </div>
    );
};

export default App;
