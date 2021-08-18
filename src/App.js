import {memo, useState} from "react";

function App() {
    const [n, setN] = useState(0);
    const [m, setM] = useState(0);

    return (
        <div id="n">
            n: {n}
            <br/>
            <button onClick={() => {
                setN(i => i + 1);
            }}>n+1
            </button>
            <hr/>
            <Child data={m}/>
            <button onClick={() => {
                setM(i => i + 1);
            }}>m+1
            </button>
        </div>
    );
}

const Child = memo((props) => {
    console.log("使用 memo() 对 Child 组件进行封装可以使 Child 组件只在 props 发生变化时才执行");
    return (
        <div>Child：{props.data}</div>
    )
});

export default App;
