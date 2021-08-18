import {memo, useCallback, useMemo, useState} from "react";

function App() {
    const [n, setN] = useState(0);
    const [m] = useState(0);

    // const childFunc = useMemo(() => {
    //     return (() => {
    //         console.log(m);
    //     })
    // }, [m]);
    const childFunc = useCallback(() => {
        console.log(m);
    }, [m]);

    return (
        <div id="n">
            n: {n}
            <br/>
            <button onClick={() => {
                setN(i => i + 1);
            }}>n+1
            </button>
            <hr/>
            <Child data={m} func={childFunc}/>
        </div>
    );
}

const Child = memo((props) => {
    console.log("使用 memo() 对 Child 组件进行封装可以使 Child 组件只在 props 发生变化时才执行");
    return (
        <div onClick={props.func}>Child：{props.data}</div>
    )
});

export default App;
