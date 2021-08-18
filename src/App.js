import {useState, useEffect} from "react";

function App() {
    const [n, setN] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log("只在第一次渲染时执行");
    }, []);

    // componentDidUpdate (Except for the first time)
    useEffect(() => {
        if (n > 0)
            console.log("除第一次渲染以外，n 更新就执行");
    }, [n]);

    // componentDidUpdate
    useEffect(() => {
        console.log("任何变化都执行");
    });

    // componentWillUnmount
    useEffect(() => {
        const id = setInterval(() => {
            console.log('carry out');
        }, 1000)
        return () => {
            window.clearInterval(id);
        }
    }, []);

    return (
        <div>
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
